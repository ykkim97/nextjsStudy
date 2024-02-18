import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        
        if (req.body.title === '') {
            return res.status(500).json('Error : 글 제목은 비어있을 수 없습니다.')
        } 

        try {
            const client = await connectDB;
            const db = client.db("forum");
            
            let newObj = { title : req.body.title, content : req.body.content };
            
            let result = await db.collection('post').updateOne(
                {_id : new ObjectId(req.body._id)}, 
                {$set : newObj}
            );
    
            return res.status(200).redirect('/list')
        } catch (error) {
            console.log(new ObjectId(req.body._id),"new ObjectId(req.body._id");
            return res.status(500).json('ERROR!!')
        }


    }
}