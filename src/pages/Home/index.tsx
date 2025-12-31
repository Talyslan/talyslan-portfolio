import Navbar from '@/components/Navbar';
import { Hero } from '@/components';

export default function Home() {
    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main>
                <Hero />
            </main>
        </div>
    );
}
