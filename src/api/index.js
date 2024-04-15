import { useRouter } from 'next/router';

export default function handler(req, res) {
    const router = useRouter();

    if (req.method === 'GET') {
        res.status(200).json({ message: 'This is a GET request' });
    } else if (req.method === 'POST') {
        res.status(200).json({ message: 'This is a POST request' });
    } else {
        res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
}
