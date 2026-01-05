import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

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
            <Toaster position="bottom-right" richColors closeButton />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}
