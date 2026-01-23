import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import type { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

export function I18nProvider({ children }: IProps) {
    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
