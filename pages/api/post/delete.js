import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            let db = (await connectDB).db('forum');
            console.log(props.params.id)
            let result = await db.collection('post').deleteOne({ _id : new ObjectId(req.body) })
            console.log(result, "결과")

            res.status(200).json('삭제완료')
        } catch(error) {
            res.status(500)
        }
        
    }

}