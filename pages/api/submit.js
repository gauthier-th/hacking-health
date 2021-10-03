import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  console.log("new response!", req.body)
  try {
    const body = JSON.parse(req.body)
    body.numIntervention = `${new Date().getFullYear().toString().substr(-2)}BE${body.numIntervention}`
    fs.writeFileSync(
      path.join(process.env.FORM_SAVES_PATH, `${body.numIntervention}-${Date.now()}.json`),
      req.body
    )
    res.status(200).json({ ok: true })
  }
  catch (e) {
    console.error("error while saving form", e)
    res.status(400).json({ ok: false })
  }
}
