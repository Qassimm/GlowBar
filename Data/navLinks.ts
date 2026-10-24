type NavLink = {
  href: string;
  label: string;
  children?: NavLink[];
};

export const navLinks: NavLink[] = [
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/makeup", label: "Makeup" },
      { href: "/services/hair-styling", label: "Hairstyle" },
      { href: "/services/nail-care", label: "Nail Care" },
      { href: "/services/spa-procedures", label: "Spa" },
    ],
  },
  { href: "/contact", label: "Contact" },
];