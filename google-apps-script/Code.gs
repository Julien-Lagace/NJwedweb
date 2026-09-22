const SHEET_ID = 'REPLACE_WITH_YOUR_SHEET_ID';
const SHEET_TAB_NAME = 'REPLACE_WITH_YOUR_TAB_NAME';
const WEBSITE_URL = 'REPLACE_WITH_YOUR_WEDDING_WEBSITE_URL';
const INVITATION_TIERS = {
  '8104': ['sangeet', 'haldi', 'wedding', 'reception'],
  '7913': ['sangeet', 'wedding', 'reception'],
  '0492': ['wedding', 'reception'],
  '5011': ['reception'],
  '6325': ['mehndi', 'sangeet', 'haldi', 'wedding', 'reception'],
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp
      .openById(SHEET_ID)
      .getSheetByName(SHEET_TAB_NAME);

    if (!sheet) {
      throw new Error(`Worksheet tab not found: ${SHEET_TAB_NAME}`);
    }

    if (!data.firstName || !data.lastName || !data.email) {
      throw new Error('First name, last name, and email are required.');
    }

    const code = String(data.code || '').toUpperCase();
    const allowedEvents = INVITATION_TIERS[code];
    if (!allowedEvents) {
      throw new Error('Invalid RSVP code.');
    }

    const attendance = data.attendance || {};
    const childNames = Array.isArray(data.children)
      ? data.children
          .map((name) => String(name || '').trim())
          .filter(Boolean)
      : [];
    const maxChildColumns = 6;
    const childValues = Array.from({ length: maxChildColumns }, (_, index) => childNames[index] || '');

    sheet.appendRow([
      new Date(),
      code,
      data.firstName || '',
      data.lastName || '',
      ...childValues,
      attendance.mehndi === true,
      attendance.sangeet === true,
      attendance.haldi === true,
      attendance.wedding === true,
      attendance.reception === true,
      data.dietaryRestrictions || '',
      data.comments || '',
    ]);

    sendConfirmationEmail(data, allowedEvents);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.message,
    });
  }
}

function sendConfirmationEmail(data, allowedEvents) {
  const isFrench = data.language === 'fr';
  const firstName = escapeHtml(data.firstName || '');
  const plainFirstName = data.firstName || '';
  const childNames = Array.isArray(data.children)
    ? data.children
        .map((name) => String(name || '').trim())
        .filter(Boolean)
    : [];
  const eventList = getEventList(allowedEvents, data.attendance, isFrench);
  const plainEventList = eventList.plain;
  const htmlEventList = eventList.html;
  const websiteUrl = String(WEBSITE_URL).trim();
  const childLine = childNames.length
    ? (isFrench ? `Enfants : ${childNames.join(', ')}\n` : `Children: ${childNames.join(', ')}\n`)
    : '';
  const subject = isFrench
    ? 'Confirmation de réponse - Le mariage de Netra et Julien'
    : 'RSVP Confirmation - Netra & Julien’s Wedding';

  const body = isFrench
    ? `Bonjour ${plainFirstName},

Merci d’avoir soumis votre réponse pour le mariage de Netra et Julien! Nous avons hâte de célébrer avec vous.

Vos événements confirmés :
${eventList.plainBullets}

${childLine ? `Enfants : ${childNames.join(', ')}\n\n` : ''}Restrictions alimentaires indiquées : ${data.dietaryRestrictions || 'Aucune'}

Vous pouvez consulter en tout temps les détails des événements, les lieux, l’horaire et les guides vestimentaires sur notre site de mariage : ${websiteUrl}

Si vos plans changent ou si vous devez modifier votre réponse, veuillez écrire à netra.julien.wedding@gmail.com afin que nous puissions mettre notre liste à jour.

À bientôt!

Avec amour,

Netra et Julien`
    : `Hello ${plainFirstName},

Thank you for submitting your RSVP for Netra and Julien’s wedding! We look forward to celebrating with you.

Your confirmed event(s):
${eventList.plainBullets}

${childLine ? `Children: ${childNames.join(', ')}\n\n` : ''}Dietary restrictions you marked: ${data.dietaryRestrictions || 'None'}

You can review all event details, venue locations, the schedule, and attire guides anytime on our wedding website: ${websiteUrl}

If your plans change or you need to update your RSVP, please email netra.julien.wedding@gmail.com so we can update our list.

See you soon!

With love,

Netra & Julien`;

  const htmlBody = isFrench
    ? `
      <p>Bonjour ${firstName},</p>
      <p>Merci d’avoir soumis votre réponse pour le mariage de Netra et Julien! Nous avons hâte de célébrer avec vous.</p>
      <p><strong>Vos événements confirmés :</strong></p>
      ${htmlEventList}
      ${childNames.length ? `<p><strong>Enfants :</strong> ${escapeHtml(childNames.join(', '))}</p>` : ''}
      <p><strong>Restrictions alimentaires indiquées :</strong> ${escapeHtml(data.dietaryRestrictions || 'Aucune')}</p>
      <p>Vous pouvez consulter en tout temps les détails des événements, les lieux, l’horaire et les guides vestimentaires sur notre <a href="${escapeHtml(websiteUrl)}">site de mariage</a>.</p>
      <p>Si vos plans changent ou si vous devez modifier votre réponse, veuillez écrire à <a href="mailto:netra.julien.wedding@gmail.com">netra.julien.wedding@gmail.com</a> afin que nous puissions mettre notre liste à jour.</p>
      <p>À bientôt!</p>
      <p>Avec amour,<br>Netra et Julien</p>
    `
    : `
      <p>Hello ${firstName},</p>
      <p>Thank you for submitting your RSVP for Netra and Julien’s wedding! We look forward to celebrating with you.</p>
      <p><strong>Your confirmed event(s):</strong></p>
      ${htmlEventList}
      ${childNames.length ? `<p><strong>Children:</strong> ${escapeHtml(childNames.join(', '))}</p>` : ''}
      <p><strong>Dietary restrictions you marked:</strong> ${escapeHtml(data.dietaryRestrictions || 'None')}</p>
      <p>You can review all event details, venue locations, the schedule, and attire guides anytime on our <a href="${escapeHtml(websiteUrl)}">wedding website</a>.</p>
      <p>If your plans change or you need to update your RSVP, please email <a href="mailto:netra.julien.wedding@gmail.com">netra.julien.wedding@gmail.com</a> so we can update our list.</p>
      <p>See you soon!</p>
      <p>With love,<br>Netra &amp; Julien</p>
    `;

  MailApp.sendEmail({
    to: String(data.email).trim(),
    subject: subject,
    body: body,
    htmlBody: htmlBody,
  });
}

function getEventList(invitedEvents, attendance, isFrench) {
  const eventDetails = {
    mehndi: {
      en: 'Mehndi (June 4, 2027) - unofficial event',
      fr: 'Mehndi (4 juin 2027) - événement non officiel',
    },
    sangeet: {
      en: 'Sangeet (June 4, 2027)',
      fr: 'Sangeet (4 juin 2027)',
    },
    haldi: {
      en: 'Haldi (June 5, 2027)',
      fr: 'Haldi (5 juin 2027)',
    },
    wedding: {
      en: 'Ceremony (June 6, 2027)',
      fr: 'Cérémonie (6 juin 2027)',
    },
    reception: {
      en: 'Reception (June 6, 2027)',
      fr: 'Réception (6 juin 2027)',
    },
  };

  const labels = invitedEvents
    .filter((eventId) => attendance && attendance[eventId] === true)
    .map((eventId) => eventDetails[eventId][isFrench ? 'fr' : 'en']);
  const noEventsMessage = isFrench ? 'Aucun événement sélectionné' : 'No events selected';
  const plainLabels = labels.length ? labels : [noEventsMessage];
  return {
    plain: plainLabels.join(' | '),
    plainBullets: plainLabels.map((label) => `- ${label}`).join('\n'),
    html: `<ul>${plainLabels.map((label) => `<li>${escapeHtml(label)}</li>`).join('')}</ul>`,
  };
}

function authorizeEmail() {
  MailApp.getRemainingDailyQuota();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
