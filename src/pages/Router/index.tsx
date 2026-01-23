import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { getDeviceLanguage } from '@/i18n';
import { Layout } from '../layout';
import NotFound from '../NotFound';
import Home from '../Home';

export function Router() {
    const defaultLang = getDeviceLanguage();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={`/${defaultLang}`} replace />}
                />

                <Route path="/:lang" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
