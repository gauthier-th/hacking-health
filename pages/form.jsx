/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AccordionItem from '../utils/accordion'
import { RadioChoice, CheckboxChoice, ScaleChoice, TagsChoice, TextChoice } from '../utils/fields'
import { victimeCategories, temoinCategories } from '../utils/categories'
import Footer from '../utils/footer'

export default function Form() {
  const router = useRouter()
  const [personType, setPersonType] = useState(null) // victime/temoin
  const [error, setError] = useState(null)
  const [data, setData] = useState({})

  const dataChange = (name, value) => {
    setData({
      ...data,
      [name]: value
    })
  }
  const handlePersonType = (type) => {
    if (!data.numIntervention || !data['1.2'] || !data['1.3']) return setError('Vous devez remplir tous les champs.')
    if (data['1.1'] > 110) return setError('L\'âge invalide.')
    if (!data.numIntervention.match(/^\d{6}$/gi)) return setError('Le numéro d\'intervention est invalide.')
    dataChange('1.1', type)
    setPersonType(type)
  }

  const handleSubmit = () => {
    fetch('/api/submit', {
      method: 'POST',
      contentType: 'application/json',
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.ok) router.push('/success')
      })
  }

  return <div className="container">
    <div className="container-80 d-flex flex-column align-center">
      <h1 className="mt-4 text-center">EvalSecours</h1>
      <p className="mt-3 mb-4 text-center">
        Ce formulaire est totalement anonyme.<br />
        Nous ne collectons aucune donnée personnelle.
      </p>

      {personType === null && <>
        <div className="my-3 d-flex flex-column align-center">
          <span>Numéro d&apos;intervention :</span>
          <div className="d-flex align-items-end">
            <span style={{ marginBottom: 6 }}>{new Date().getFullYear().toString().substr(-2)}BE</span>
            <TextField onChange={(e) => dataChange('numIntervention', e.target.value)} placeholder="123456"inputProps={{ maxLength: 6 }} variant="standard" />
          </div>
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
      {personType && (
        <FormType
          handleSubmit={handleSubmit}
          dataChange={dataChange}
          data={data}
          personType={personType}
          title={<>
            <h1 className="my-4 text-center">{personType === "victime" ? "Je suis victime :" : "Je suis témoin :"}</h1>
          </>}
          categories={personType === "victime" ? victimeCategories : temoinCategories}
        />
      )}

    </div>

    <Footer />
  </div>
}

function FormType({ categories, personType, title, handleSubmit, dataChange, data }) {
  const [expanded, setExpanded] = useState(categories[0].name)

  return <>
    {title}
    {categories.map((category, i) => (
      <Category key={i} expanded={expanded} setExpanded={setExpanded} category={category} dataChange={dataChange} data={data} />
    ))}
    <div className="d-flex justify-content-center">
      <Button variant="contained" className="mt-4" onClick={() => handleSubmit(personType)}>Envoyer</Button>
    </div>
  </>
}

function Category({ category, expanded, setExpanded, dataChange, data }) {
  const questions = []
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
    <div className="d-flex flex-column">
      {questions.map((question, i) => (
        <Field key={i} question={question} dataChange={dataChange} />
      ))}
    </div>
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
    return <div className="d-flex flex-column align-center">
      <span className="mt-4">{label}</span>
      <ScaleChoice
        label={label}
        from={from}
        to={to}
        handleChange={(val) => dataChange(name, val)}
      />
    </div>
  }
  else if (type === "tags") {
    const { choices, selectId } = question
    return <TagsChoice
      choices={choices}
      selectId={selectId}
      label={label}
      handleChange={(val) => dataChange(name, val)}
    />
  }
  else if (type === "text") {
    return <TextChoice
      label={label}
      handleChange={(val) => dataChange(name, val)}
    />
  }
}
