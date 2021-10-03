import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  console.log("new response!", req.body)
  try {
    const body = JSON.parse(req.body)
    fs.writeFileSync(
      path.join(process.env.FORM_SAVES_PATH, `${new Date().getFullYear().toString().substr(-2)}BE${body.numIntervention}-${Date.now()}.json`),
      req.body
    )
    res.status(200).json({ ok: true })
  }
  catch {
    res.status(400).json({ ok: false })
  }
}
