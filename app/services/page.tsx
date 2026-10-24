
import Cards from "@/component/Services/Cards";
import Hero1 from "@/component/UI/Hero1";

const Page = () => {
  return (
    <div>
      <Hero1
        image="/assets/Services/Services.webp"
        title="Services"
        description="Explore our complete range of beauty and wellness treatments"
        button1="Book a call"
        button1Link="/contact"
        button2="Back to home"
        button2Link="/"
      />
      <Cards/>
    </div>
  );
};

export default Page;