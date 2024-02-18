import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});
    console.log(props, "props")

    return (
        <div>
            <h2>상세보기</h2>
            <p>{result.title}</p>
        </div>
    )
}