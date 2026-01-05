import Navbar from '@/components/Navbar';
import { Hero } from '@/components';
import About from '@/components/HomeSections/About';
import Skills from '@/components/HomeSections/Skills';
import Projects from '@/components/HomeSections/Projects';
import Contact from '@/components/HomeSections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="bg-background min-h-screen">
            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
