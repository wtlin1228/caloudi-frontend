import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  }
}))

const useCheckboxes = (label, options) => {
  let defaultState = {}
  options.forEach(option => {
    defaultState[option] = false
  })

  const classes = useStyles()
  const [state, setState] = useState(defaultState)

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const Checkboxes = () => (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{label}</FormLabel>
        <FormGroup>
          {options.map(option => (
            <FormControlLabel
              key={`use-checkboxes-${option}`}
              control={
                <Checkbox
                  checked={state[option]}
                  onChange={handleChange}
                  name={option}
                />
              }
              label={option}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  )

  return [state, Checkboxes, setState]
}

export default useCheckboxes
