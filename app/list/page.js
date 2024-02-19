

import { connectDB } from "@/util/database"
import ListItem from "./ListItem";

// dynamic rendering force
export const dynamic = 'force-dynamic';


export default async function List(props) {

    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    console.log('글 목록 ==>>', result)

    return (
        <div className="list-bg">
            <ListItem result={result} />
        </div>
    )
}