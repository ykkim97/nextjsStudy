import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    console.log(req.body);
    if (req.method === 'POST') {
        if (req.body.userId == '') {
            return res.status(500).json('Your Id is Empty.')
        }
        if (req.body.password == '') {
            return res.status(500).json('Your password is Empty.')
        }
        if (req.body.userName == '') {
            return res.status(500).json('Your Name is Empty.')
        }
        try {
            const client = await connectDB;
            const db = client.db("forum");
            let result = await db.collection('user_info').insertOne(req.body);

            return res.status(200).redirect('/')
        } catch(error) {
            console.log(error)
            return res.status(500).json("[ERROR] : Database Error")
        }
    }
}