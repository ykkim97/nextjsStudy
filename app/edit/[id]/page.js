import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props) {
    let db = (await connectDB).db('forum');
    console.log(props.params.id)
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

    console.log('result', result)
    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/update" method="POST">
                <input name="title" defaultValue={result.title}/>
                <input name="content" defaultValue={result.content}/>
                <input name="_id" value={result._id.toString()} type="hidden"/>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}