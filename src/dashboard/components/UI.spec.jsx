import React from 'react'

import { createRenderer, expect } from '../../test'
import {
  Card,
  CardTitle,
  CardText,
  Button,
  AccentedButton,
  NumberInput,
  Table,
  TableHeadText,
  TableCellText
} from './UI'

describe('UI', () => {
  it('should render a Card', () => {
    const renderer = createRenderer()
    renderer.render(
        <Card>
          <div>Test</div>
        </Card>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <div className='mdl-card mdl-shadow--2dp'>
        <div>Test</div>
      </div>
    )
  })

  it('should render a CardTitle', () => {
    const renderer = createRenderer()
    renderer.render(<CardTitle text='Test' />)
    const output = renderer.getRenderOutput()
    expect(output).to.include(
        <div className='mdl-card__title'>
          <h2 className='mdl-card__title-text'>Test</h2>
      </div>
    )
  })

  it('should render a CardText', () => {
    const renderer = createRenderer()
    renderer.render(<CardText text='Test' />)
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <div className='mdl-card__supporting-text' style={{padding: 0}}>
        Test
      </div>
    )
  })

  it('should render a NumberInput', () => {
    const renderer = createRenderer()
    renderer.render(
        <NumberInput id='test' label='Test' validationError='Error' value={3} onChange={_ => {}}/>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <div className='mdl-textfield mdl-js-textfield'>
        <input className='mdl-textfield__input' type='text' pattern='-?[0-9]*(\.[0-9]+)?' id='test' value={3} onChange={_ => {}}/>
        <label className='mdl-textfield__label' htmlFor='test'>Test</label>
        <span className='mdl-textfield__error'>Error</span>
      </div>
    )
  })

  it('should render a Button', () => {
    const renderer = createRenderer()
    renderer.render(<Button text='Test' disabled/>)
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <button
        type='submit'
        className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored'
        disabled>
        Test
      </button>
    )
  })

  it('should render an AccentedButton', () => {
    const renderer = createRenderer()
    renderer.render(<AccentedButton text='Test' />)
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <button style={{margin: 5}} className='mdl-button mdl-js-button mdl-button--raised mdl-button--accent'>
        Test
      </button>
    )
  })

  it('should render a Table', () => {
    const renderer = createRenderer()
    renderer.render(
        <Table>
          <div>Test</div>
        </Table>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <table className='mdl-data-table mdl-js-data-table'>
        <div>Test</div>
      </table>
    )
  })

  it('should render a TableHeadText', () => {
    const renderer = createRenderer()
    renderer.render(
        <TableHeadText>
          <div>Test</div>
        </TableHeadText>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <th className='mdl-data-table__cell--non-numeric'>
        <div>Test</div>
      </th>
    )
  })

  it('should render a TableCellText', () => {
    const renderer = createRenderer()
    renderer.render(
        <TableCellText>
          <div>Test</div>
        </TableCellText>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.include(
      <td className='mdl-data-table__cell--non-numeric'>
        <div>Test</div>
      </td>
    )
  })
})
