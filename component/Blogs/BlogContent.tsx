import { ContentBlock } from "@/Data/blog";

 

type Props = {
  content: ContentBlock[];
};

const BlogContent = ({ content }: Props) => {
  return (
    <div className="flex flex-col gap-5 text-start">
      {content.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="font-yester text-3xl sm:text-4xl text-primary mt-6"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";

          return (
            <ListTag
              key={index}
              className={`flex flex-col gap-4 text-lg sm:text-xl pl-6 ${
                block.ordered ? "list-decimal" : "list-disc"
              } marker:text-primary marker:font-bold`}
            >
              {block.items.map((item, i) => (
                <li key={i}>
                  {item.title && (
                    <strong className="font-bold">{item.title} </strong>
                  )}
                  {item.text}
                </li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={index} className="text-lg sm:text-xl leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
};

export default BlogContent;