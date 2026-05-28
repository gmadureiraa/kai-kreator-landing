import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Personas } from "./components/personas";
import { Features } from "./components/features";
import { Flow } from "./components/flow";
import { Testimonials } from "./components/testimonials";
import { Faq } from "./components/faq";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteudo
      </a>
      <Nav />
      <main id="conteudo" className="flex-1">
        <Hero />
        <Personas />
        <Features />
        <Flow />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
