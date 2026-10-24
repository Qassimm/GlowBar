import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  const client = await clientPromise;
  const db = client.db("glowbar");
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const collection = db.collection("blogs");
  if (slug) {
    const blogs = await collection.findOne({ slug });
    return Response.json(blogs);
  }

  const blogs =await collection.find({}).sort({ id: 1 }).toArray();

  return Response.json(blogs);
}
