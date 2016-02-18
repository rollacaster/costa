import React, { PropTypes } from 'react'
import Radium from 'radium'

import { classes } from '../css'

export const Card = Radium(({children}) => (
  <div className={classes.card} style={{minHeight: 0, margin: 5}}>
    {children}
  </div>
))

export const CardTitle = Radium(({text}) => (
  <div className={classes.cardTitle}>
    <h2 className={classes.cardTitleText}>{text}</h2>
  </div>
))

CardTitle.propTypes = {
  text: PropTypes.string
}

export const CardText = Radium(({children}) => (
  <div className={classes.cardText} style={{padding: 0}}>
    {children}
  </div>
))

CardText.propTypes = {
  text: PropTypes.string
}

export const CardActions = Radium(({children}) => (
  <div className={classes.cardActions}>
    {children}
  </div>
))

export const LinkButton = Radium(({text, onClick}) => (
  <a className={classes.linkButton} onClick={onClick}>
    {text}
  </a>
))

export const NumberInput = Radium(({id, label, onChange, validationError, value, style}) => (
  <div className={classes.textField} style={style}>
    <input className={classes.input} type='text' pattern='-?[0-9]*(\.[0-9]+)?' id={id} onChange={onChange} value={value}/>
    <label className={classes.label} htmlFor={id}>{label}</label>
    <span className={classes.textFieldError}>{validationError}</span>
  </div>
))

NumberInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}

export const TextInput = Radium(({id, label, onChange, validationError, value, style}) => (
  <div className={classes.textField} style={style}>
    <input className={classes.input} type='text' id={id} onChange={onChange} value={value}/>
    <label className={classes.label} htmlFor={id}>{label}</label>
    <span className={classes.textFieldError}>{validationError}</span>
  </div>
))

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func
}

export const SelectableButton = Radium(({text, selected, onClick, style}) => (
  <button
    type='button'
    className={selected ? classes.raisedButton : classes.raisedButtonAccented }
    onClick={onClick}
    style={style}>
    {text}
  </button>
))

export const Button = Radium(({text, disabled, onClick, type}) => (
  <button type={type} className={classes.raisedButton} disabled={disabled} onClick={onClick}>
    {text}
  </button>
))

Button.propTypes = {
  text: PropTypes.string
}

export const AccentedButton = Radium(({text}) => (
  <button style={{margin: 5}} className={classes.raisedButtonAccented}>
    {text}
  </button>
))

AccentedButton.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string
}

export const AddIconButton = Radium(({style, onClick}) => (
  <button className={classes.addButton} style={style} onClick={onClick}>
    <i className={classes.icons}>add</i>
  </button>
))

export const Table = Radium(({children}) => (
  <table className={classes.table}>
    {children}
  </table>
))

export const TableHeadText = Radium(({children}) => (
  <th className={classes.nonNumericTableCell}>
    {children}
  </th>
))

export const TableCellText = Radium(({children}) => (
  <td className={classes.nonNumericTableCell}>
    {children}
  </td>
))

export const Attribute = ({attribute, value}) => (
  <p style={{margin: 0}}><span style={{fontWeight: 600}}>{attribute}</span> {value}</p>
)

Attribute.propTypes = {
  key: PropTypes.string,
  value: PropTypes.string
}
