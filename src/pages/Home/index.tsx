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
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.2,
            effects: true,
            smoothTouch: 0.1,
        });
    }, []);

    return (
        <div className="bg-background min-h-screen">
            <MouseFollower />
            <Navbar />

            <div id="smooth-wrapper" ref={wrapperRef}>
                <div id="smooth-content">
                    <main>
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Contact />
                    </main>
                    <Footer />
                </div>
            </div>

            <ScrollToTopButton />
        </div>
    );
}
