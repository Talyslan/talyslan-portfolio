import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { Router } from './Router';
import { I18nProvider } from '@/i18n/i18n-provider';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <I18nProvider>
                <Toaster position="bottom-right" richColors closeButton />
                <Router />
            </I18nProvider>
        </QueryClientProvider>
    );
}
