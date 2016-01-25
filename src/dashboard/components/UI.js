import React, { PropTypes } from 'react'
import { classes } from '../css'

export const Card = ({children}) => (
  <div className={classes.card}>
    {children}
  </div>
)

export const CardTitle = ({text}) => (
  <div className={classes.cardTitle}>
    <h2 className={classes.cardTitleText}>{text}</h2>
  </div>
)

CardTitle.propTypes = {
  text: PropTypes.string
}

export const CardText = ({text}) => (
  <div className={classes.cardText} style={{padding: 0}}>
    {text}
  </div>
)

CardText.propTypes = {
  text: PropTypes.string
}

export const NumberInput = ({id, label, onChange, validationError, value}) => (
  <div className={classes.textField}>
    <input className={classes.input} type='text' pattern='-?[0-9]*(\.[0-9]+)?' id={id} onChange={onChange} value={value}/>
    <label className={classes.label} htmlFor={id}>{label}</label>
    <span className={classes.textFieldError}>{validationError}</span>
  </div>
)

NumberInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}

export const SelectableButton = ({text, selected, onClick}) => (
  <button
    type='button'
    className={selected ? classes.raisedButton : classes.raisedButtonAccented }
    onClick={onClick}
    style={{margin: 5}}>
    {text}
  </button>
)

export const Button = ({text, disabled}) => (
  <button type='submit' className={classes.raisedButton} disabled={disabled}>
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string
}

export const AccentedButton = ({text}) => (
  <button style={{margin: 5}} className={classes.raisedButtonAccented}>
    {text}
  </button>
)

AccentedButton.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string
}

export const Table = ({children}) => (
  <table className={classes.table}>
    {children}
  </table>
)

export const TableHeadText = ({children}) => (
  <th className={classes.nonNumericTableCell}>
    {children}
  </th>
)

export const TableCellText = ({children}) => (
  <td className={classes.nonNumericTableCell}>
    {children}
  </td>
)
