import { getRelativeLocaleUrl } from 'astro:i18n';
import { ui } from './ui';
import { pages } from './pages';

export type Locale = 'en' | 'fr';

export const locales: Locale[] = ['en', 'fr'];
export const defaultLocale: Locale = 'en';

export function resolveLocale(value: string | undefined): Locale {
  return value === 'fr' ? 'fr' : 'en';
}

export function getUi(locale: Locale) {
  return ui[locale];
}

export function getPages(locale: Locale) {
  return pages[locale];
}

/** Strip locale prefix and trailing slash noise from a pathname. */
export function stripLocaleFromPath(pathname: string): string {
  const normalized = pathname.replace(/\/$/, '') || '/';

  for (const locale of ['en', 'fr'] as const) {
    if (normalized === `/${locale}`) return '/';
    if (normalized.startsWith(`/${locale}/`)) {
      const rest = normalized.slice(locale.length + 1);
      return rest.startsWith('/') ? rest : `/${rest}`;
    }
  }

  return normalized === '' ? '/' : normalized;
}

/** Build the equivalent URL in another locale, preserving hash if provided. */
export function getLocalizedPath(
  targetLocale: Locale,
  pathname: string,
  hash = '',
): string {
  const path = stripLocaleFromPath(pathname);
  const url = getRelativeLocaleUrl(targetLocale, path === '/' ? '/' : path);
  return `${url}${hash}`;
}

export { ui, pages };
