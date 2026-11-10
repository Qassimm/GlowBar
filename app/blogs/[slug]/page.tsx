import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cache } from "react";
import clientPromise from "@/lib/mongodb";
import type { ContentBlock } from "@/Data/blog";
import SideContacts from "@/component/UI/SideContacts";
import BlogHero from "@/component/Blogs/BlogHero";
import BlogAuthor from "@/component/Blogs/BlogAuthor";
import BlogContent from "@/component/Blogs/BlogContent";
import SocialLinks from "@/component/Blogs/SocialLinks";

type Props = {
  params: Promise<{ slug: string }>;
};

type Blog = {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
};


const getBlog = cache(async (slug: string) => {
  const client = await clientPromise;
  const db = client.db("glowbar");

  return db.collection<Blog>("blogs").findOne({ slug });
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return { title: "Blog not found" };

  return {
    title: `${blog.title} | GlowBar`,
    description: blog.excerpt,
  };
}

const BlogPage = async ({ params }: Props) => {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return (
    <main className="flex flex-col items-center pb-24 lg:pb-28">
      <BlogHero src={blog.image} alt={blog.title}/>

      <div className="w-full max-w-6xl px-6 pt-10 lg:pt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-20">
        <article className="flex flex-col text-start gap-8 min-w-0">
          <h1 className="font-yester text-4xl sm:text-5xl md:text-6xl text-brand-gradient">
            {blog.title}
          </h1>

          <BlogAuthor />

          <BlogContent content={blog.content} />

          <div className="flex flex-col items-start gap-4 mt-6">
            <h3 className="text-xl font-semibold text-primary">
              Follow GlowBar
            </h3>
            <SocialLinks variant="filled" />
          </div>

          <Link
            href="/about"
            className="text-xl text-primary font-medium w-fit mt-4"
          >
            ← Go Back
          </Link>
        </article>

        <aside>
          <div className="lg:sticky lg:top-28 flex flex-col gap-6">
            <SideContacts />
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogPage;