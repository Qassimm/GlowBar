import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";

const footerData = [
  {
    title: "Quick Links",
    navLinks: [
      { link: "About us", href: "/about" },
      { link: "Services", href: "/services" },
      { link: "Contact", href: "/contact" },
    ],
  },
  {
    title: "All Services",
    navLinks: [
      { link: "Makeup", href: "/services/makeup" },
      { link: "HairStyle", href: "/services/hair-styling" },
      { link: "NailCare", href: "/services/nail-care" },
      { link: "SPA Procedure", href: "/services/spa-procedures" },
    ],
  },
];

const contactData = [
  { icon: LuMapPin, text: "Lahore, Florida, Mars" },
  { icon: IoMailOutline, text: "Glowbar.pk@gmail.com" },
  { icon: MdLocalPhone, text: "+92 321 123456" },
  { icon: IoMdTime, text: "10:00 AM - 10:30 PM, Mon - Sun" },
];

const socialData = [
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: GrInstagram, href: "https://instagram.com", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className=" bg-gray-300 ">
      <div className="max-w-[1920px] py-10 md:py-20 px-10 flex flex-col md:flex-row items-center md:items-start justify-center  md:justify-evenly mx-auto gap-10 md:gap-0">
        {/* Brand */}
        <div className="flex flex-col items-center text-center md:text-start md:items-start justify-center gap-2">
          <Link href="/" className="flex items-center font-yester w-fit text-3xl">
            <Image
              src="/assets/logo.webp"
              alt="glow bar logo"
              width={40}
              height={40}
              priority={false}
            />
            GlowBar
          </Link>

          <span className="text-xl max-w-xs">
            Pakistan’s premier destination for beauty and wellness services.
          </span>

          <div className="flex gap-2">
            {socialData.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon className="h-5 w-5 hover:text-primary" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links + All Services */}
        <div className="flex flex-wrap justify-center text-center md:text-start gap-10 md:gap-20">
        {footerData.map((section) => (
          <div key={section.title}>
            <h2 className="font-yester text-3xl">{section.title}</h2>

            <div className="flex flex-col gap-1 text-xl mt-2">
              {section.navLinks.map(({ link, href }) => (
                <Link key={link} href={href} className="hover:text-primary">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Contact Us */}
        <div>
          <h2 className="font-yester text-3xl">Contact us</h2>

          <div className="flex flex-col gap-1 text-xl mt-2">
            {contactData.map(({ icon: Icon, text }) => (
              <span key={text} className="flex gap-2 items-center">
                <Icon className="text-primary" /> {text}
              </span>
            ))}
          </div>
          </div>
        </div>
      </div>
            <span className="border-t border-gray-400 flex  justify-center py-5 text-primary">
                &copy; {new Date().getFullYear()} GLOWBAR. All rights reserved.
            </span>
    </footer>
  );
};

export default Footer;