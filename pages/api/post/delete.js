import {ObjectId} from "mongodb";
import {getServerSession} from "next-auth";
import {authOptions} from "../auth/[...nextauth]";
import {connectDB} from "@/util/database";

export default async function handler(req, res) {
    if (req.method == 'DELETE') {
        console.log(req.body)
        let session = await getServerSession(req, res, authOptions)

        const db = (await connectDB).db('forum')
        let findItem = await db
            .collection('post')
            .findOne({
                _id: new ObjectId(req.body)
            })

        if (findItem.author == session.user.email) {
            let result = await db
                .collection('post')
                .deleteOne({
                    _id: new ObjectId(req.body)
                })
            return res
                .status(200)
                .json('삭제완료')
        } else {
            return res
                .status(500)
                .json('현재유저와 작성자 불일치')
        }
    }
}