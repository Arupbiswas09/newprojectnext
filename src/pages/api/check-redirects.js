export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { urls, userAgent } = req.body;
      return res.status(200).json({ success: true, urls, userAgent });
    }
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
   