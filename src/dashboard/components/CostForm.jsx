import React, { PropTypes } from 'react'

import {
  Card,
  CardTitle,
  CardText,
  Button,
  AccentedButton,
  NumberInput
} from './UI'

const CostForm = ({categories}) => (
  <div style={{display: 'flex', justifyContent: 'center', padding: 10, height: '100%'}}>
    <Card>
      <CardTitle text='Create new cost' />
      <form style={{padding: 10, display: 'flex', flexDirection: 'column'}}>
        <CardText text='Category' />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          categories.map(category => (
            <AccentedButton key={category} id={category} text={category} />
          ))
        }
        </div>
        <NumberInput id='costInput' label='Cost' error='Not a number!' />
        <Button text='Create'/>
      </form>
    </Card>
  </div>
)

CostForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
}

export default CostForm
