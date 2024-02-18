import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb"
import Link from "next/link";

export default async function Home() {

  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  console.log(result)

  return (
    <div>
      <h2>{result[0].title}</h2>
      <h2>{result[0].content}</h2>
    </div>
  )
}
