import { connectDB } from "@/util/database";


export default async function handler(req, res) {
    const db = (await connectDB).db('forum');
    let list = await db.collection('post').find().toArray();
    
    return res.status(200).json(list);
}