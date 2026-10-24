import BookingForm from "@/component/Booking/BookingForm ";
import Hero2 from "@/component/UI/Hero2";
import { BookableService } from "@/Data/types";
import clientPromise from "@/lib/mongodb";

const toAmount = (price: unknown) =>
  parseInt(String(price).replace(/[^\d]/g, ""), 10) || 0;

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) => {
  const { s } = await searchParams;

  const client = await clientPromise;
  const db = client.db("glowbar");
  const docs = await db.collection("services").find({}).toArray();

  // list1 + list2 of every service -> one flat list
  const services: BookableService[] = docs.flatMap((doc) =>
    [...(doc.list1 ?? []), ...(doc.list2 ?? [])].map((item: any) => ({
      id: `${doc.slug}::${item.category}`,
      group: doc.title,
      name: item.category,
      price: String(item.price),
      amount: toAmount(item.price),
    }))
  );

  return (
    <main>
      <Hero2
        title="Book Your Glow Up"
        description="Pick services, time and confirm — all on one page"
      />
      <div className="px-4 py-12 sm:px-6 lg:py-16">
        <BookingForm services={services} preselectedId={s} />
      </div>
    </main>
  );
};

export default Page;