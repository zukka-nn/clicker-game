export default async function handler(req, res) {
  const dummyLeaderboard = [
    { name: 'Alice', score: 150 },
    { name: 'Bob', score: 120 },
    { name: 'Charlie', score: 90 }
  ];
  res.status(200).json(dummyLeaderboard);
}
