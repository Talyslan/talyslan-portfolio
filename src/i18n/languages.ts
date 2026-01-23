export const SUPPORTED_LANGUAGES = ['pt-BR', 'en'] as const;

export function isLang(value: string): value is Lang {
    return SUPPORTED_LANGUAGES.includes(value as Lang);
}

export function getLang(): Lang {
    const lang = navigator.language;
    if (lang.startsWith('pt')) return 'pt-BR';
    return 'en';
}

export function getDeviceLanguage(): Lang {
    const lang = getLang();
    return isLang(lang) ? lang : 'en';
}
