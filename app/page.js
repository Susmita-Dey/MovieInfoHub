import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center w-full h-[100vh]" style={{
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 50, 0.7), rgba(0, 0, 50, 0.7)), url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backdropFilter: 'blur(4px) brightness(0.8) contrast(1.2) grayscale(0.5)',
      }}>
        <div className="flex flex-col items-center gap-4 justify-center w-full h-full">
          <h2 className='text-6xl font-bold'>Discover the Magic of Movies</h2>
          <p className='text-2xl font-medium'>Explore a world of entertainment. Find information about your favorite movies, actors, and directors.</p>
          <Link href={'/signup'} className="bg-red-600 hover:bg-red-800 text-white text-lg font-bold py-4 px-6 rounded-md mt-4">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}
