import Navbar from '@/components/Navbar';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Navbar />

            <h1 className="mb-4 text-4xl font-bold">
                Welcome to Talyslan Portfólio, galera
            </h1>
        </div>
    );
}
