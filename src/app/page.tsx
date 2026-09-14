import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Expertise from "@/components/Expertise/Expertise";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Philosophy from "@/components/Philosophy/Philosophy";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import Stack from "@/components/Stack/Stack";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <>
      <Header />

      <main className="w-full bg-background pt-14">
        <Hero />
        <About />
        <Expertise />
        <Process />
        <Projects />
        <Stack />
        <Team />
        <Philosophy />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
