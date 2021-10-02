export default function handler(req, res) {
  console.log("new response!", req.body)
  res.status(200).json({ ok: true })
}
