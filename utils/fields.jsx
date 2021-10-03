import { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'
import TextField from '@mui/material/TextField'

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

export function TagsChoice({ choices, selectId, label, handleChange }) { // array of { value: string, label: string }
  const [values, setValues] = useState([])

  const inputChange = (event) => {
    const { target: { value } } = event
    const newValue = typeof value === 'string' ? value.split(',') : value
    setValues(newValue)
    handleChange(newValue)
  }
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
      },
    },
  }

  return <div className="d-flex flex-column mt-4">
    <span>{label}</span>
    <FormControl className="m-0 mt-3 w-100" sx={{ m: 1, width: 300 }}>
      <InputLabel id={selectId}>Choisissez votre réponse</InputLabel>
      <Select
        labelId={selectId}
        multiple
        value={values}
        onChange={inputChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {choices.map((choice, i) => (
          <MenuItem
            key={i}
            value={choice.value}
          >
            {choice.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
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
