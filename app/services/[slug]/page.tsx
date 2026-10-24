
import Image from "next/image";
import { notFound } from "next/navigation";
import Hero2 from "@/component/UI/Hero2";
import Link from "next/link";
import clientPromise from "@/lib/mongodb";

type ServiceItem = {
  category: string;
  price: string | number;
};

type ServiceData = {
  title: string;
  description: string;
  List1Name: string;
  list1: ServiceItem[];
  List2Name: string;
  list2: ServiceItem[];
  imageForService: string;
};

const ServicePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const client = await clientPromise;
  const db = client.db("glowbar");

  const fetchedSelectedCardData = await db
    .collection<ServiceData>("services")
    .findOne({ slug });

  if (!fetchedSelectedCardData) notFound();

  return (
    <>
      <Hero2
        title={fetchedSelectedCardData.title}
        description={fetchedSelectedCardData.description}
      />

      <div className="py-20 lg:py-24 px-6 flex justify-center items-center">
        <div className="relative flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-35 max-w-6xl w-full">
          {/* Left: list1 + list2 */}
          <div className="flex flex-col gap-10 w-full max-w-xl">
            <div className="flex flex-col gap-4">
              <h3 className="font-yester text-4xl text-primary">
                {fetchedSelectedCardData.List1Name}
              </h3>

              <div className="flex flex-col gap-4 text-xl">
                {fetchedSelectedCardData.list1.map((item, i) => (
                  <p key={i} className="flex items-end gap-2 w-full">
                    <span>{item.category}</span>
                    <span className="flex-1 border-b-2 border-dashed border-primary/40 mb-1.5" />
                    <span className="font-medium">{item.price}</span>
                    <span className="flex-1 border-b-2 border-dashed border-primary/40 mb-1.5" />
                    <Link
                      href={`/booking?s=${encodeURIComponent(`${slug}::${item.category}`)}`}
                      className="hover:text-primary"
                    >
                      Book Now
                    </Link>
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-yester text-4xl text-primary">
                {fetchedSelectedCardData.List2Name}
              </h3>

              <div className="flex flex-col gap-4 text-xl">
                {fetchedSelectedCardData.list2.map((item, i) => (
                  <p key={i} className="flex items-end gap-2 w-full">
                    <span>{item.category}</span>
                    <span className="flex-1 border-b-2 border-dashed border-primary/40 mb-1.5" />
                    <span className="font-medium">{item.price}</span>
                    <span className="flex-1 border-b-2 border-dashed border-primary/40 mb-1.5" />
                    <Link
                      href={`/booking?s=${encodeURIComponent(`${slug}::${item.category}`)}`}
                      className="hover:text-primary"
                    >
                      Book Now
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image */}
          <Image
            src={fetchedSelectedCardData.imageForService}
            height={550}
            width={400}
            alt={fetchedSelectedCardData.title}
            className="rounded-4xl shrink-0 hidden sm:block"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default ServicePage;
