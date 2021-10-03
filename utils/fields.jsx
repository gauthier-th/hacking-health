import { useState, useEffect } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import Slider from '@mui/material/Slider'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'

export function RadioChoice({ choices, handleChange, label }) { // array of { value: string, label: string }
  const [value, setValue] = useState(null)
  const inputChange = (e, val) => {
    if (e.target.checked) setValue(val)
    handleChange(val)
  }
  return <FormControl component="fieldset" className="mt-3">
    {label && <FormLabel component="legend">{label}</FormLabel>}
    <RadioGroup
      aria-label="gender"
      defaultValue="female"
      name="radio-buttons-group"
    >
      {choices.map((choice, i) => (
        <FormControlLabel
          key={i}
          value={choice.value}
          control={<Radio onChange={(e) => inputChange(e, choice.value)} />}
          label={choice.label}
        />
      ))}
    </RadioGroup>
  </FormControl>
}

export function CheckboxChoice({ choices, handleChange }) { // array of { value: string, label: string, default: boolean }
  const [values, setValues] = useState(choices.filter((choice) => choice.default).map((choice) => choice.value))
  const inputChange = (e, value) => {
    let newValue
    if (e.target.checked) newValue = [...values, value]
    else newValue = values.filter((val) => val !== value)
    setValues(newValue)
    handleChange(newValue)
  }
  return <FormGroup className="mt-3">
    {choices.map((choice, i) => (
      <FormControlLabel key={i} control={<Checkbox defaultChecked={choice.default} onChange={(e) => inputChange(e, choice.value)} />} label={choice.label} />
    ))}
  </FormGroup>
}

export function ScaleChoice({ choices, handleChange, from, to }) { // array of { value: string, label: string }
  return <div className="d-flex justify-content-center align-items-center">
    {from && <span className="mt-2">{from}</span>}
    {/* <Slider
      className="mt-3"
      defaultValue={3}
      valueLabelDisplay="auto"
      step={null}
      marks={choices}
      onChange={(e) => handleChange(e.target.value)}
    /> */}
    <Slider
      className="mt-3 mx-3"
      defaultValue={3}
      valueLabelDisplay="auto"
      step={1}
      marks
      min={1}
      max={5}
      onChange={(e) => handleChange(e.target.value)}
    />
    {to && <span className="mt-3">{to}</span>}
  </div>
}

export function TagsChoice({ choices, label, handleChange }) { // array of { value: string, label: string }
  const [values, setValues] = useState([])
  const [selectedValue, setSelectedValue] = useState(null)
  useEffect(() => {
    handleChange(values)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  return <div className="d-flex flex-column">
    <div className="mt-3 mb-2">
      {label}
    </div>
    <div className="d-flex">
      {values.map((value, i) => (
        <Chip
          key={i}
          label={choices.find((choice => choice.value === value)).label}
          onDelete={() => setValues(values.filter((val) => val !== value))}
        />
      ))}
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <Autocomplete
        className="my-3 me-3"
        freeSolo
        blurOnSelect
        options={choices.filter((choice) => !values.includes(choice.value))}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} placeholder="Votre choix" />}
        value={selectedValue}
        onChange={(e, newValue) => setSelectedValue(newValue)}
      />
      <div>
        <Button
          variant="outlined"
          onClick={() => {
            if (selectedValue) {
              setValues([...values, selectedValue.value])
              setSelectedValue(null)
            }
          }}
        >
          Ajouter
        </Button>
      </div>
    </div>
  </div>
}

export function TextChoice({ label, handleChange }) {
  return <div className="d-flex flex-column mt-4">
    <span>{label}</span>
    <TextField
      className="w-100 mt-3"
      onChange={(e) => handleChange(e.target.value)}
      placeholder={"Votre réponse"}
      variant="outlined"
      multiline
      minRows={4}
    />
  </div>
}
