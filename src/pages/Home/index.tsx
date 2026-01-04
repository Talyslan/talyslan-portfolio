import Navbar from '@/components/Navbar';
import { Hero } from '@/components';
import About from '@/components/HomeSections/About';

export default function Home() {
    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main>
                <Hero />
                <About />
            </main>
        </div>
    );
}
