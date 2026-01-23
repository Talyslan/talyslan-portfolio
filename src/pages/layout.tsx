import { Navigate, Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import i18n from '@/i18n/config';
import { isLang } from '@/i18n/languages';

export function Layout() {
    const { lang } = useParams<{ lang?: string }>();

    const isValidLang = !!lang && isLang(lang);

    useEffect(() => {
        if (!isValidLang) return;

        i18n.changeLanguage(lang);
        document.documentElement.lang = lang;
    }, [lang, isValidLang]);

    if (!isValidLang) {
        return <Navigate to="/en" replace />;
    }

    return <Outlet />;
}
