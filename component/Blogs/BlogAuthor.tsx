import Image from "next/image";
import SocialLinks from "./SocialLinks";

type Props = {
  publishedOn?: string;
};

const BlogAuthor = ({ publishedOn = "October 6, 2026" }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <div className="flex flex-row items-center gap-3">
        <Image
          src="/assets/logo.webp"
          alt="GlowBar Logo"
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />

        <div className="flex flex-col text-start">
          <span className="text-lg font-semibold text-primary">GlowBar</span>
          <span className="text-sm opacity-70">Published on {publishedOn}</span>
        </div>
      </div>

      <SocialLinks variant="plain" />
    </div>
  );
};

export default BlogAuthor;