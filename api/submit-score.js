export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, score } = req.body;
    res.status(200).json({ message: `Score received: ${name} - ${score}` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
