import Hero from "@/components/Hero";
import StudioIntro from "@/components/StudioIntro";
import ExpertiseList from "@/components/ExpertiseList";
import Clients from "@/components/Clients";
import NewsList from "@/components/NewsList";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StudioIntro />
      <ExpertiseList />
      <Clients />
      <NewsList />
      <ContactSection />
    </main>
  );
}