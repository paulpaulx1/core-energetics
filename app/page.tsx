import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import What from "@/components/What";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <Navigation isHomePage={true} />
      <Hero />
      <What />
    </main>
  );
}
