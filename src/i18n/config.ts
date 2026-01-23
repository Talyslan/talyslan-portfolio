import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';

export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

i18n.use(initReactI18next).init({
    resources: {
        'pt-BR': { translation: ptBR },
        en: { translation: en },
    },
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
