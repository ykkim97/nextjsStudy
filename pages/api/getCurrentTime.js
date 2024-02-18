
export default async function handler(req, res) {
    let currentTime = new Date();

    return res.status(200).json(currentTime);
}