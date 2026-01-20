import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import What from "@/components/What";
import How from "@/components/How";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-900 text-white">
      <Navigation isHomePage={true} />
      <Hero />
      <What />
      <How />
    </main>
  );
}
