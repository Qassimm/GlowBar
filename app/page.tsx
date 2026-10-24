import Bride from "@/component/Home/Bride";
import Cta from "@/component/Home/Cta";
import Hero from "@/component/Home/Hero";
import Services from "@/component/Home/Services";
import Testimonial from "@/component/Home/Testimonial";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Bride/>
      <Testimonial/>
      <Cta/>
    </div>
  );
}
