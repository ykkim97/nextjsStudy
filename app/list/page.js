import { connectDB } from "@/util/database"
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List(props) {

    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    console.log('result ==>>', result)

    return (
        <div className="list-bg">
            {result.map((item, index) => (
                <div className="list-item">
                    <Link href={`/detail/${item._id}`}>
                        <h4>{result[index].title}</h4>
                    </Link>
                    <Link className="list-btn" href={`/edit/${result[index]._id}`} >✏️</Link>
                    <DetailLink title="ㅎㅇ"/>
                    <p>{result[index].content}</p>
                    <p>1월 1일</p>
                </div>
            ))}
        </div>
    )
}