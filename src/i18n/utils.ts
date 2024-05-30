import { defaultLang, translate } from "./index";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in translate) return lang as keyof typeof translate;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof translate) {
  return function t(key: keyof (typeof translate)[typeof defaultLang]) {
    return translate[lang][key] || translate[defaultLang][key];
  };
}
