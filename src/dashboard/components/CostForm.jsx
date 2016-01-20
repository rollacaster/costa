import React, { PropTypes } from 'react'
import { classes } from '../css'

const CostForm = ({categories}) => (
  <div style={{display: 'flex', justifyContent: 'center', padding: 10, height: '100%'}}>
    <div className={classes.card}>
      <div className={classes.cardTitle}>
        <h2 className={classes.cardTitleText}>Create new cost</h2>
      </div>
      <form style={{padding: 10, display: 'flex', flexDirection: 'column'}}>
        <div className={classes.cardText} style={{padding: 0}}>
          Category
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          categories.map(category => (
            <button style={{margin: 5}} className={classes.raisedButtonAccented} key={category}>
              {category}
            </button>
          ))
        }
        </div>
        <div className={classes.textField}>
          <input className={classes.input} type='text' pattern='-?[0-9]*(\.[0-9]+)?' id='sample2' />
          <label className={classes.label} htmlFor='sample2'>Cost</label>
          <span className={classes.textFieldError}>Input is not a number!</span>
        </div>
        <button className={classes.raisedButton}>
          Create
        </button>
      </form>
    </div>
  </div>
)

CostForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
}

export default CostForm
