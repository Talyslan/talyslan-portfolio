import {
    MouseFollower,
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Contact,
    Footer,
} from '@/components';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

export default function Home() {
    return (
        <div className="bg-background min-h-screen">
            <MouseFollower />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />

            <ScrollToTopButton />
        </div>
    );
}
