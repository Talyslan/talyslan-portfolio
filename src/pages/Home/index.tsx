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
        </div>
    );
}
