import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const useRadioGroup = (label, defaultValue, options) => {
  const [value, setValue] = React.useState(defaultValue)

  const handleChange = event => {
    setValue(event.target.value)
  }

  const MyRadioGroup = () => (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        {options.map(option => (
          <FormControlLabel
            key={`${label}-${option}`}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )

  return [value, MyRadioGroup, setValue]
}

export default useRadioGroup
