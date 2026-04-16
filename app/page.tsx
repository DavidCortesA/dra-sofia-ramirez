import Nav          from "@/components/Nav";
import Hero         from "@/components/Hero";
import About        from "@/components/About";
import Specialties  from "@/components/Specialties";
import Process      from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Faq          from "@/components/Faq";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Specialties />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
