import { ui, defaultLang, showDefaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)[key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: Lang = lang): string {
    if (!showDefaultLang && l === defaultLang) {
      return path;
    }
    return `/${l}${path}`;
  };
}

export function getAlternateLocaleUrl(url: URL, targetLang: Lang): string {
  const currentLang = getLangFromUrl(url);
  const pathname = url.pathname;

  // Remove current locale prefix if present
  let cleanPath = pathname;
  if (currentLang !== defaultLang) {
    cleanPath = pathname.replace(`/${currentLang}`, '') || '/';
  }

  // Add target locale prefix if not default
  if (targetLang === defaultLang && !showDefaultLang) {
    return cleanPath;
  }
  return `/${targetLang}${cleanPath}`;
}
