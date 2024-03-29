import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions) 

    if (session) {
        console.log(session.user.email, "session.user.email")
        req.body.author = session.user.email
    }
    
    

    if (req.method === 'POST') {
        console.log(req.body);
        
        if (req.body.title === '') {
            return res.status(500).json('Error : 글 제목을 입력하지 않았습니다.')
        } 

        try {
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db.collection('post').insertOne(req.body);
    
            return res.status(200).redirect('/list')
        } catch (error) {
            return res.status(500).json('Database ERROR!!')
        }
    }
}