import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AccordionItem from '../utils/accordion'
import { RadioChoice, CheckboxChoice, ScaleChoice, TagsChoice } from '../utils/fields'
import { victimeCategories } from '../utils/categories'

export default function Home() {
  const [personType, setPersonType] = useState(null) // victime/temoin
  const [error, setError] = useState(null)
  const [data, setData] = useState({})

  const dataChange = (name, value) => {
    console.log({
      ...data,
      [name]: value
    })
    setData({
      ...data,
      [name]: value
    })
  }
  const handlePersonType = (type) => {
    if (!data.numIntervention || !data['1.2'] || !data['1.3']) return setError('Vous devez remplir tous les champs.')
    if (data['1.1'] > 110) return setError('L\'âge invalide.')
    if (!data.numIntervention.match(/\d{2}BE\d{5}/gi)) return setError('Le numéro d\'intervention est invalide.')
    dataChange('1.1', type)
    setPersonType(type)
  }

  const handleSubmit = () => {
    
    fetch('/api/submit', {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify(data)
    })
  }

  return <>
    <div className="container-80 d-flex flex-column align-center">
      <div className="d-flex justify-content-center">
        <img src="/photo.jpg" style={{ width: '80%' }} />
      </div>

      <h1 className="my-4 text-center">Défi 17 : EvalSecours</h1>

      {personType === null && <>
        <div className="my-3 d-flex flex-column align-center">
          <span>Numéro d&apos;intervention :</span>
          <TextField onChange={(e) => dataChange('numIntervention', e.target.value)} label="Exemple : 21BE02102" variant="standard" />
        </div>
        <div className="my-3 d-flex flex-column align-center">
          <span>Âge :</span>
          <TextField onChange={(e) => dataChange('1.2', parseInt(e.target.value))} label="Exemple : 35" variant="standard" type="number" />
        </div>
        <div className="my-3 d-flex flex-column align-center">
          <span>Est-ce que c&apos;était la première fois que vous avez eu besoin des sapeurs-pompiers ?</span>
          <RadioChoice choices={[ { value: 'oui', label: 'Oui' }, { value: 'non', label: 'Non' } ]} handleChange={(val) => dataChange('1.3', val)} />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <div className="my-3 d-flex justify-content-center">
          <Button size="large" variant="contained" onClick={() => handlePersonType("victime")}>Je suis victime</Button>
          <Button className="ms-3" size="large" variant="contained" onClick={() => handlePersonType("temoin")}>Je suis témoin</Button>
        </div>
      </>}
      {personType === "victime" && <Victime handleSubmit={handleSubmit} dataChange={dataChange} data={data} />}
      {personType === "temoin" && <Temoin handleSubmit={handleSubmit} dataChange={dataChange} data={data} />}

    </div>

    <div className="d-flex mt-5 mb-4 border-top border-secondary">
      <div className="container-80 mt-3 d-flex flex-column justify-content-center align-items-center">
        <span>Projet créé à l&apos;occasion du HackingHealth 2021 à Besançon.</span>
        <a href="https://gauthier-thomas.dev/">https://gauthier-thomas.dev</a>
      </div>
    </div>
  </>
}

function Victime({ handleSubmit, dataChange, data }) {
  const [expanded, setExpanded] = useState(victimeCategories[0].name)

  return <>
    <h1 className="my-4 text-center">Je suis victime :</h1>
    {victimeCategories.map((category, i) => (
      <Category key={i} expanded={expanded} setExpanded={setExpanded} category={category} dataChange={dataChange} data={data} />
    ))}
    <div className="d-flex justify-content-center">
      <Button variant="contained" className="mt-4" onClick={() => handleSubmit("temoin")}>Envoyer</Button>
    </div>
  </>
}

function Temoin({ handleSubmit, dataChange }) {
  return <>
    <h1 className="my-4">Je suis témoin :</h1>
  </>
}

function Category({ category, expanded, setExpanded, dataChange, data }) {
  const questions = [];
  for (let question of category.questions) {
    questions.push(question);
    if (question.continueIfValue && question.continueIfValue !== data[question.name])
      break;
  }

  return <AccordionItem expanded={expanded} {...{
    setExpanded,
    name: category.name,
    nextName: category.nextName,
    title: category.label,
    description: category.description
  }}>
    {questions.map((question, i) => (
      <Field key={i} question={question} dataChange={dataChange} />
    ))}
  </AccordionItem>
}

function Field({ question, dataChange }) {
  const { name, type, label } = question
  if (type === "radio") {
    const { choices } = question
    return <RadioChoice
      label={label}
      choices={choices}
      handleChange={(val) => dataChange(name, val)}
    />
  }
  else if (type === "checkbox") {
    const { choices } = question
    return <div className="d-flex flex-column align-center">
      <span>{label}</span>
      <CheckboxChoice
        choices={choices}
        handleChange={(val) => dataChange(name, val)}
      />
    </div>
  }
  else if (type === "scale") {
    const { from, to } = question
    return <ScaleChoice
      label={label}
      from={from}
      to={to}
      handleChange={(val) => dataChange(name, val)}
    />
  }
  else if (type === "tags") {
    const { choices } = question
    return <TagsChoice
      choices={choices}
      selectId={selectId}
      label={label}
      handleChange={(val) => dataChange(name, val)}
    />
  }
}
