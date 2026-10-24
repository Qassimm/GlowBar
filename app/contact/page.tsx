import Form from "@/component/Contact/Form";
import PreContacts from "@/component/Contact/PreContacts";
import Hero1 from "@/component/UI/Hero1";

const Page = () => {
  return (
    <main>
        <Hero1
        image="/assets/Contact/contact.webp"
        title="Talk to GlowBar"
        description="Book an appointment, ask about a treatment, share feedback or plan a bridal visit. Our team replies within minutes during opening hours."
        button1="Explore Services"
        button1Link="/services"
        button2="Back to home"
        button2Link="/"
        />
        <PreContacts/>
        <Form/>
    </main>
  );
};

export default Page;