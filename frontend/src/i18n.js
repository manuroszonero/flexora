import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import ja from "./locales/ja/translation.json";
import ms from "./locales/ms/translation.json";
import ml from "./locales/ml/translation.json";
import ta from "./locales/ta/translation.json";
import zh from "./locales/zh/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      ja: { translation: ja },
      ms: { translation: ms },
      ml: { translation: ml },
      ta: { translation: ta },
      zh: { translation: zh },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;