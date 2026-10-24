import Achievements from "@/component/About/Achievements";
import Blogs from "@/component/About/Blogs";
import Journey from "@/component/About/Journey";
import Team from "@/component/About/Team";
import Vision from "@/component/About/Vision";
import Hero1 from "@/component/UI/Hero1";

const ServicesPage = () => {
  return (
    <div>
      <Hero1
        image="/assets/About/About.webp"
        title="About Glow Bar"
        description="GlowBar is your one-stop beauty destination for bridal makeup, facials, hair styling, and nail care, delivered by skilled professionals in a clean, relaxing space."
        button1="Book a call"
        button1Link="/contact"
        button2="Explore Services"
        button2Link="/services"
      />  
      <Achievements/>
      <Journey/>
      <Vision/>
      <Team/>
      <Blogs/>
    </div>
  );
};

export default ServicesPage;
