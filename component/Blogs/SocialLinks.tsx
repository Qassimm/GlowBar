import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

type Props = {
  variant?: "plain" | "filled";
};

const SocialLinks = ({ variant = "plain" }: Props) => {
  const linkClass =
    variant === "filled"
      ? "w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white hover:scale-110 transition-transform duration-300"
      : "w-12 h-12 flex items-center justify-center hover:text-primary text-gray-500";

  return (
    <div className={`flex ${variant === "filled" ? "items-center gap-4" : ""}`}>
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow GlowBar on Facebook"
        className={linkClass}
      >
        <FaFacebookF size={20} />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow GlowBar on Instagram"
        className={linkClass}
      >
        <GrInstagram size={22} />
      </a>
    </div>
  );
};

export default SocialLinks;