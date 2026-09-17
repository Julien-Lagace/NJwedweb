export const pages = {
  en: {
    whatToExpect: {
      title: 'What To Expect | Netra & Julien',
      eyebrow: 'Celebration',
      heading: 'What To Expect',
      intro:
        'Our wedding weekend weaves together cherished Gujarati traditions and joyful celebration. Whether these rituals are familiar or new to you, here is what each event means—and what you can expect as our guest.',
      events: [
        {
          id: 'sangeet',
          eyebrow: 'Night of Music and Dance',
          title: 'Sangeet',
          summary:
            'Sangeet means "sung together"—a festive pre-wedding evening of music, dance, and family coming together. In Gujarati culture it is often joined with Garba and Dandiya Raas, circling dances set to lively rhythms and bright, colorful energy.',
          guest:
            'Expect performances, group dances, and plenty of chances to join in—even if you have never danced Garba or Dandiya before. Wear something festive you can move in, follow the circle, and enjoy one of the highest-energy nights of the weekend.',
        },
        {
          id: 'haldi',
          eyebrow: 'Blessings',
          title: 'Haldi',
          summary:
            'Haldi is a joyful blessing ritual in which a paste of turmeric (and often other auspicious ingredients) is gently applied to the couple. The golden color is believed to purify, protect, and bring good fortune as they prepare for marriage.',
          guest:
            'This gathering is warm, playful, and intimate. Come ready for laughter, photos, and a little turmeric—yellow or light-colored clothes are ideal, and you may be invited to apply a small bit of paste as a blessing.',
        },
        {
          id: 'wedding',
          eyebrow: 'The Ceremony',
          title: 'Wedding',
          summary:
            'The Gujarati wedding ceremony is a sacred sequence of rituals before the holy fire (agni). Moments may include the varmala (exchange of garlands), pheras (circling the fire together), and blessings that mark the couple\'s vows and union.',
          guest:
            'As a guest, you are there to witness and celebrate. The ceremony can run longer than a Western wedding—follow cues to stand or sit, keep voices soft during rituals, and enjoy the beauty of each blessing as Netra and Julien begin their marriage.',
        },
        {
          id: 'reception',
          eyebrow: 'The Celebration',
          title: 'Reception',
          summary:
            'The reception is the grand celebration after the wedding rites—an evening to honor the newlyweds with dinner, toasts, music, and dancing. It is the joyful, communal close to the wedding weekend.',
          guest:
            'Arrive ready to celebrate: enjoy a seated dinner, raise a glass during toasts, and join us on the dance floor. This is the party night—come hungry, stay late, and help us send Netra and Julien into married life with joy.',
        },
      ],
    },
    schedule: {
      title: 'Schedule | Netra & Julien',
      eyebrow: 'The Weekend',
      heading: 'Wedding Schedule',
      intro:
        'Three days of celebration, from Friday through Sunday.',
      days: [
        {
          id: 'friday',
          label: 'Friday - Sangeet',
          date: 'June 4, 2027',
          location: 'Sheraton Suites Calgary Eau Claire',
          items: [
            {
              time: '6:00 PM',
              title: 'Guest Arrival',
              desc: 'Welcome drinks, food stations, and time to settle in.',
            },
            {
              time: '7:00 PM',
              title: 'Sangeet Program',
              desc: 'An evening of music, dance, and family performances.',
            },
            {
              time: '10:30 PM',
              title: 'Celebration Ends',
              desc: 'The evening comes to a close.',
            },
          ],
        },
        {
          id: 'saturday',
          label: 'Saturday - Haldi',
          date: 'June 5, 2027',
          location: 'Sheraton Suites Calgary Eau Claire',
          items: [
            {
              time: '8:45 AM',
              title: 'Puja',
              desc: 'Morning blessings and traditional ceremonies.',
            },
            {
              time: '11:30 AM',
              title: 'Haldi',
              desc: 'A joyful turmeric blessing with family and friends.',
            },
            {
              time: '12:15 PM',
              title: 'Lunch',
              desc: 'A relaxed lunch for all guests.',
            },
            {
              time: '2:00 PM',
              title: 'Free Time',
              desc: 'Explore the city, relax, or prepare for tomorrow\'s events.',
            },
          ],
        },
        {
          id: 'sunday',
          label: 'Sunday - Wedding & Reception',
          date: 'June 6, 2027',
          location: 'Wedding: Calgary Marriott Downtown Hotel | Reception: Sheraton Suites Calgary Eau Claire',
          items: [
            {
              time: '8:30 AM',
              title: 'Baraat Preparations',
              desc: 'The groom’s side gathers before the procession.',
            },
            {
              time: '9:00 AM',
              title: 'Baraat',
              desc: 'Join the joyful procession to the ceremony.',
            },
            {
              time: '10:30 AM',
              title: 'Wedding Ceremony',
              desc: 'Traditional Gujarati wedding rituals with family and friends.',
            },
            {
              time: '1:30 PM',
              title: 'Transit to Sheraton & Lunch',
              desc: 'Lunch with family and wedding guests.',
            },
            {
              time: '6:00 PM',
              title: 'Cocktail Hour',
              desc: 'Drinks, light bites, and mingling before the reception.',
            },
            {
              time: '7:00 PM',
              title: 'Reception',
              desc: 'A festive evening of dinner, speeches, performances, and dancing.',
            },
            {
              time: '10:30 PM',
              title: 'Dinner Ends',
              desc: 'Dinner service concludes as the evening continues.',
            }
          ],
        },
      ],
    },
    venue: {
      title: 'Venue | Netra & Julien',
      eyebrow: 'Venue',
      heading: "Where We'll Celebrate",
      venues: [
        {
          id: 'sheraton',
          name: 'Sheraton Suites Calgary Eau Claire',
          addressLine1: '255 Barclay Parade SW',
          addressLine2: 'Calgary, AB T2P 5C2',
          imageAlt: 'Sheraton Suites Calgary Eau Claire',
          events: 'Sangeet, Haldi, and Reception',
        },
        {
          id: 'marriott',
          name: 'Calgary Marriott Downtown Hotel',
          addressLine1: '110 9 Avenue SE',
          addressLine2: 'Calgary, AB T2G 5A6',
          imageAlt: 'Calgary Marriott Downtown Hotel',
          events: 'Wedding ceremony',
        },
      ],
      venueEventsLabel: 'Celebrations here:',
      getDirections: 'Get Directions',
      travelEyebrow: 'Travel',
      travelHeading: 'How to Get There',
      parkingLabel: 'Parking:',
      parkingText:
        'There is no hotel parking. Plenty of street parking is available nearby, along with several paid parking lots.',
      transitLabel: 'Transit / Shuttle:',
      transitIntro: 'Both hotels are accessible by CTrain.',
      transitItems: [
        'Sheraton Suites Calgary Eau Claire: use 4th street or 6th street station, followed by about a 10-minute walk.',
        'Calgary Marriott Downtown Hotel: use 1st street or Centre street station, followed by about a 5-minute walk.',
        'Shuttles run only between the Marriott and the Sheraton on the wedding day.',
      ],
      airportLabel: 'Airport:',
      airportText:
        'From Calgary International Airport (YYC), a taxi to your hotel is recommended. Alternatively, the airport bus goes downtown if you prefer public transit.',
      stayEyebrow: 'Stay',
      stayHeading: 'Hotel Booking',
      stayIntro:
        'Our recommended hotel is Sheraton Suites Calgary Eau Claire. Guests can use the group booking link below for a discount and to help keep wedding guests\' rooms close to each other.',
      bookingLinkText: 'Book with the group rate',
      bookingLinkUrl: 'https://app.marriott.com/reslink?id=1768858921960&key=GRP&app=resvlink',
    },
    attire: {
      title: 'Attire | Netra & Julien',
      eyebrow: 'Dress Code',
      heading: 'Attire',
      intro:
        'Think about the styles you would enjoy wearing. Traditional outfits are strongly recommended for Sangeet and requested for the Wedding.',
      gentlemen: 'Gentlemen',
      ladies: 'Ladies',
      shoppingHeading: 'Recommended Shops',
      shoppingEyebrow: 'Where to shop',
      shoppingIntro: 'Explore these recommended places to order or rent outfits for the wedding celebrations.',
      purchaseHeading: 'Order outfits',
      rentalHeading: 'Rent outfits',
      purchaseLinks: [
        { label: 'Twirlin Style', href: 'https://twirlinstyle.com/' },
        { label: 'Lashkaraa', href: 'https://www.lashkaraa.com/en-ca?srsltid=AfmBOoqvHSYWK3yjChywiW5dpiOCS5Wlv31jA781AdX3KFcTaSvw_ldW' },
        { label: 'The Saree Room', href: 'https://www.thesareeroom.com/en-ca?srsltid=AfmBOoon1Js8q9qsQZeYlYFKN93fLpq-LLVSWK1XMq5i4SPk65ia12Mr' },
        { label: 'House of Indya', href: 'https://www.houseofindya.com/' },
      ],
      rentalLinks: [
        { label: 'Ouar', href: 'https://ouar.net/collections/all' },
        { label: 'Boomie', href: 'https://boomie.rent/' },
        { label: 'My Ethnik Rentals', href: 'https://myethnikrentals.com/?srsltid=AfmBOoquCQo71Dcl9l8XG7nsrAZhYNaYUV04eVf70-LTL2dlYmkTS2oN' },
      ],
      events: [
        {
          id: 'sangeet',
          title: 'Sangeet',
          vibe: 'Traditional & Festive',
          menImage: 'kurta',
          womenImage: 'lehenga',
          desc: 'Traditional outfits are strongly recommended for this evening of music and celebration. Colors: TBD.',
          gentlemen: [
            'Kurta strongly recommended',
            'Choose comfortable fabrics',
          ],
          ladies: [
            'Lehenga strongly recommended',
            'Color palette: TBD',
          ],
        },
        {
          id: 'haldi',
          title: 'Haldi',
          vibe: 'Bright & Playful',
          menImage: 'kurta',
          womenImage: 'dress',
          desc: 'Wear anything you feel comfortable in for a joyful celebration with turmeric and laughter. Colors: TBD.',
          gentlemen: [
            'Any outfit you feel comfortable wearing',
            'Light, washable fabrics are a good choice',
          ],
          ladies: [
            'Any outfit you feel comfortable wearing',
            'Color palette: TBD',
          ],
        },
        {
          id: 'wedding',
          title: 'Wedding',
          vibe: 'Traditional Wedding Attire',
          menImage: 'kurta',
          womenImage: 'saree',
          desc: 'Traditional outfits are requested for the wedding ceremony. Colors: TBD.',
          gentlemen: ['Kurta requested', 'Formal traditional fabrics', 'Color palette: TBD'],
          ladies: [
            'Saree or lehenga requested',
            'Color palette: TBD',
          ],
        },
        {
          id: 'reception',
          title: 'Reception',
          vibe: 'Elegant & Festive',
          menImage: 'suit',
          womenImage: 'saree',
          desc: 'Choose an elegant look that feels right for an evening of dinner, dancing, and celebration. Colors: TBD.',
          gentlemen: [
            'Party wear or a suit',
            'Color palette: TBD',
          ],
          ladies: [
            'Lehenga, saree, or party wear',
            'Color palette: TBD',
          ],
        },
      ],
    },
    rsvp: {
      title: 'RSVP | Netra & Julien',
      eyebrow: 'Reply',
      heading: 'RSVP',
      body: 'Coming soon. We will share RSVP details here once they are ready.',
    },
  },
  fr: {
    whatToExpect: {
      title: 'À quoi s\'attendre | Netra & Julien',
      eyebrow: 'Célébration',
      heading: 'À quoi s\'attendre',
      intro:
        'Notre week-end de mariage tisse ensemble de chères traditions gujaraties et une célébration joyeuse. Que ces rituels vous soient familiers ou nouveaux, voici ce que chaque événement signifie—et ce à quoi vous pouvez vous attendre en tant qu\'invité.',
      events: [
        {
          id: 'sangeet',
          eyebrow: 'Soirée de musique et de danse',
          title: 'Sangeet',
          summary:
            'Sangeet signifie « chanté ensemble »—une soirée festive avant le mariage, dédiée à la musique, à la danse et au rapprochement des familles. Dans la culture gujaratie, elle se mêle souvent au Garba et au Dandiya Raas, des danses en cercle au rythme vif et à l\'énergie colorée.',
          guest:
            'Attendez-vous à des performances, des danses de groupe et de nombreuses occasions de participer—même si vous n\'avez jamais dansé le Garba ou le Dandiya. Portez une tenue festive dans laquelle vous pouvez bouger, suivez le cercle et profitez d\'une des soirées les plus animées du week-end.',
        },
        {
          id: 'haldi',
          eyebrow: 'Bénédictions',
          title: 'Haldi',
          summary:
            'Le Haldi est un rituel de bénédiction joyeux au cours duquel une pâte de curcuma (et souvent d\'autres ingrédients auspicieux) est doucement appliquée sur le couple. La couleur dorée est censée purifier, protéger et apporter bonne fortune avant le mariage.',
          guest:
            'Ce moment est chaleureux, ludique et intime. Venez prêts pour les rires, les photos et un peu de curcuma—les vêtements jaunes ou clairs sont idéaux, et on pourra vous inviter à appliquer un peu de pâte en signe de bénédiction.',
        },
        {
          id: 'wedding',
          eyebrow: 'La cérémonie',
          title: 'Mariage',
          summary:
            'La cérémonie de mariage gujaratie est une suite sacrée de rituels devant le feu sacré (agni). On y retrouve notamment le varmala (échange de guirlandes), les pheras (tours autour du feu) et les bénédictions qui scellent les vœux et l\'union du couple.',
          guest:
            'En tant qu\'invité, vous êtes là pour témoigner et célébrer. La cérémonie peut durer plus longtemps qu\'un mariage occidental—suivez les indications pour vous lever ou vous asseoir, gardez la voix basse pendant les rituels, et savourez la beauté de chaque bénédiction alors que Netra et Julien commencent leur mariage.',
        },
        {
          id: 'reception',
          eyebrow: 'La célébration',
          title: 'Réception',
          summary:
            'La réception est la grande célébration après les rites du mariage—une soirée pour honorer les jeunes mariés avec un dîner, des toasts, de la musique et de la danse. C\'est la clôture joyeuse et conviviale du week-end.',
          guest:
            'Arrivez prêts à célébrer : savourez un dîner assis, levez votre verre lors des toasts et rejoignez-nous sur la piste. C\'est la soirée festive—venez avec appétit, restez tard, et aidez-nous à accompagner Netra et Julien dans leur vie de couple avec joie.',
        },
      ],
    },
    schedule: {
      title: 'Horaire | Netra & Julien',
      eyebrow: 'Le week-end',
      heading: 'Horaire du mariage',
      intro:
        'Trois jours de célébration, du vendredi au dimanche.',
      days: [
        {
          id: 'friday',
          label: 'Vendredi - Sangeet',
          date: '4 juin 2027',
          location: 'Sheraton Suites Calgary Eau Claire',
          items: [
            {
              time: '18 h 00',
              title: 'Arrivée des invités',
              desc: 'Boissons de bienvenue, stations gourmandes et accueil des invités.',
            },
            {
              time: '19 h 00',
              title: 'Programme du Sangeet',
              desc: 'Une soirée de musique, de danse et de prestations familiales.',
            },
            {
              time: '22 h 30',
              title: 'Fin de la célébration',
              desc: 'La soirée se termine.',
            },
          ],
        },
        {
          id: 'saturday',
          label: 'Samedi - Haldi',
          date: '5 juin 2027',
          location: 'Sheraton Suites Calgary Eau Claire',
          items: [
            {
              time: '8 h 45',
              title: 'Puja',
              desc: 'Bénédictions matinales et cérémonies traditionnelles.',
            },
            {
              time: '11 h 30',
              title: 'Haldi',
              desc: 'Une joyeuse bénédiction au curcuma avec famille et amis.',
            },
            {
              time: '12 h 15',
              title: 'Déjeuner',
              desc: 'Un déjeuner convivial pour tous les invités.',
            },
            {
              time: '14 h 00',
              title: 'Temps libre',
              desc: 'Explorez la ville, détendez-vous ou préparez-vous pour les événements de demain.',
            },
          ],
        },
        {
          id: 'sunday',
          label: 'Dimanche - Mariage & Réception',
          date: '6 juin 2027',
          location: 'Mariage : Calgary Marriott Downtown Hotel | Réception : Sheraton Suites Calgary Eau Claire',
          items: [
            {
              time: '8 h 30',
              title: 'Préparatifs du baraat',
              desc: 'La famille du marié se réunit avant le cortège.',
            },
            {
              time: '9 h 00',
              title: 'Baraat',
              desc: 'Joignez-vous au joyeux cortège vers la cérémonie.',
            },
            {
              time: '10 h 30',
              title: 'Cérémonie de mariage',
              desc: 'Rituels de mariage gujaratis entourés de famille et d’amis.',
            },
            {
              time: '13 h 30',
              title: 'Transportation vers le Sheraton & Dîner',
              desc: 'Dîner avec la famille et les invités.',
            },
            {
              time: '18 h 00',
              title: 'Cocktail',
              desc: 'Boissons, bouchées et échanges avant la réception.',
            },
            {
              time: '19 h 00',
              title: 'Réception',
              desc: 'Une soirée de dîner, discours, prestations et danse.',
            },
            {
              time: '22 h 30',
              title: 'Fin du dîner',
              desc: 'Le service du dîner se termine, mais la soirée continue.',
            }
          ],
        },
      ],
    },
    venue: {
      title: 'Lieu | Netra & Julien',
      eyebrow: 'Lieu',
      heading: 'Where We\'ll Celebrate',
      venues: [
        {
          id: 'sheraton',
          name: 'Sheraton Suites Calgary Eau Claire',
          addressLine1: '255 Barclay Parade SW',
          addressLine2: 'Calgary, AB T2P 5C2',
          imageAlt: 'Sheraton Suites Calgary Eau Claire',
          events: 'Sangeet, Haldi et réception',
        },
        {
          id: 'marriott',
          name: 'Calgary Marriott Downtown Hotel',
          addressLine1: '110 9 Avenue SE',
          addressLine2: 'Calgary, AB T2G 5A6',
          imageAlt: 'Calgary Marriott Downtown Hotel',
          events: 'Cérémonie de mariage',
        },
      ],
      venueEventsLabel: 'Célébrations ici :',
      getDirections: 'Get Directions',
      travelEyebrow: 'Travel',
      travelHeading: 'How to Get There',
      parkingLabel: 'Parking:',
      parkingText:
        'Il n’y a pas de stationnement à l’hôtel. Il y a beaucoup de stationnement dans la rue ainsi que plusieurs stationnements payants à proximité.',
      transitLabel: 'Transit / Shuttle:',
      transitIntro: 'Les deux hôtels sont accessibles par le CTrain.',
      transitItems: [
        'Sheraton Suites Calgary Eau Claire : descendez à la station 4th street ou 6th street, puis marchez environ 10 minutes.',
        'Calgary Marriott Downtown Hotel : descendez à la station 1st street ou Centre street, puis marchez environ 5 minutes.',
        'Les navettes circuleront uniquement entre le Marriott et le Sheraton le jour du mariage.',
      ],
      airportLabel: 'Airport:',
      airportText:
        'Depuis l’aéroport international de Calgary (YYC), il est recommandé de prendre un taxi jusqu’à votre hôtel. Vous pouvez aussi prendre l’autobus vers le centre-ville si vous préférez les transports en commun.',
      stayEyebrow: 'Hébergement',
      stayHeading: 'Réservation d’hôtel',
      stayIntro:
        'Notre hôtel recommandé est le Sheraton Suites Calgary Eau Claire. Les invités peuvent utiliser le lien de réservation de groupe ci-dessous pour profiter d’un rabais et aider à regrouper les chambres des invités du mariage.',
      bookingLinkText: 'Réserver au tarif de groupe',
      bookingLinkUrl: 'https://app.marriott.com/reslink?id=1768858921960&key=GRP&app=resvlink',
    },
    attire: {
      title: 'Tenue | Netra & Julien',
      eyebrow: 'Code vestimentaire',
      heading: 'Tenue',
      intro:
        'Pensez aux styles que vous aimeriez porter. Les tenues traditionnelles sont fortement recommandées pour le Sangeet et demandées pour le mariage.',
      gentlemen: 'Hommes',
      ladies: 'Femmes',
      shoppingHeading: 'Boutiques recommandées',
      shoppingEyebrow: 'Où magasiner',
      shoppingIntro: 'Découvrez ces boutiques recommandées pour commander ou louer des tenues pour les célébrations du mariage.',
      purchaseHeading: 'Commander une tenue',
      rentalHeading: 'Louer une tenue',
      purchaseLinks: [
        { label: 'Twirlin Style', href: 'https://twirlinstyle.com/' },
        { label: 'Lashkaraa', href: 'https://www.lashkaraa.com/en-ca?srsltid=AfmBOoqvHSYWK3yjChywiW5dpiOCS5Wlv31jA781AdX3KFcTaSvw_ldW' },
        { label: 'The Saree Room', href: 'https://www.thesareeroom.com/en-ca?srsltid=AfmBOoon1Js8q9qsQZeYlYFKN93fLpq-LLVSWK1XMq5i4SPk65ia12Mr' },
        { label: 'House of Indya', href: 'https://www.houseofindya.com/' },
      ],
      rentalLinks: [
        { label: 'Ouar', href: 'https://ouar.net/collections/all' },
        { label: 'Boomie', href: 'https://boomie.rent/' },
        { label: 'My Ethnik Rentals', href: 'https://myethnikrentals.com/?srsltid=AfmBOoquCQo71Dcl9l8XG7nsrAZhYNaYUV04eVf70-LTL2dlYmkTS2oN' },
      ],
      events: [
        {
          id: 'sangeet',
          title: 'Sangeet',
          vibe: 'Traditionnel et festif',
          menImage: 'kurta',
          womenImage: 'lehenga',
          desc: 'Les tenues traditionnelles sont fortement recommandées pour cette soirée de musique et de célébration. Couleurs : à déterminer.',
          gentlemen: [
            'Kurta fortement recommandé',
            'Choisissez des tissus confortables',
          ],
          ladies: [
            'Lehenga fortement recommandé',
            'Palette de couleurs : à déterminer',
          ],
        },
        {
          id: 'haldi',
          title: 'Haldi',
          vibe: 'Éclatant et ludique',
          menImage: 'kurta',
          womenImage: 'dress',
          desc: 'Portez ce qui vous convient pour une joyeuse célébration avec du curcuma et beaucoup de rires. Couleurs : à déterminer.',
          gentlemen: [
            'Toute tenue dans laquelle vous êtes à l’aise',
            'Les tissus légers et lavables sont un bon choix',
          ],
          ladies: [
            'Toute tenue dans laquelle vous êtes à l’aise',
            'Palette de couleurs : à déterminer',
          ],
        },
        {
          id: 'wedding',
          title: 'Mariage',
          vibe: 'Tenue traditionnelle de mariage',
          menImage: 'kurta',
          womenImage: 'saree',
          desc: 'Les tenues traditionnelles sont demandées pour la cérémonie de mariage. Couleurs : à déterminer.',
          gentlemen: [
            'Kurta demandé',
            'Tissus traditionnels élégants',
            'Palette de couleurs : à déterminer',
          ],
          ladies: [
            'Saree ou lehenga demandé',
            'Palette de couleurs : à déterminer',
          ],
        },
        {
          id: 'reception',
          title: 'Réception',
          vibe: 'Élégant et festif',
          menImage: 'suit',
          womenImage: 'saree',
          desc: 'Choisissez une tenue élégante pour une soirée de dîner, de danse et de célébration. Couleurs : à déterminer.',
          gentlemen: [
            'Tenue de soirée ou costume',
            'Palette de couleurs : à déterminer',
          ],
          ladies: [
            'Lehenga, saree ou tenue de soirée',
            'Palette de couleurs : à déterminer',
          ],
        },
      ],
    },
    rsvp: {
      title: 'RSVP | Netra & Julien',
      eyebrow: 'Reply',
      heading: 'RSVP',
      body: 'Coming soon. We will share RSVP details here once they are ready.',
    },
  },
} as const;
