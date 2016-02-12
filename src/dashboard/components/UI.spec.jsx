import React from 'react'

import { createRenderer, expect } from '../../test'
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  LinkButton,
  Button,
  AccentedButton,
  AddIconButton,
  NumberInput,
  Table,
  TableHeadText,
  TableCellText,
  Attribute
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
    expect(output).to.be.deep.equal(
      <div _radiumDidResolveStyles className=' mdl-card mdl-shadow--2dp' style={{minHeight: 0, margin: 5}}>
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
    renderer.render(<CardText>Test</CardText>)
    const output = renderer.getRenderOutput()
    expect(output).to.be.deep.equal(
      <div className=' mdl-card__supporting-text' style={{padding: 0}} _radiumDidResolveStyles>
        Test
      </div>
    )
  })

  it('should render CardActions', () => {
    const renderer = createRenderer()
    renderer.render(<CardActions>Test</CardActions>)
    const output = renderer.getRenderOutput()
    expect(output).to.be.deep.equal(
      <div className='mdl-card__actions mdl-card--border'>
        Test
      </div>
    )
  })

  it('should render LinkButton', () => {
    const renderer = createRenderer()
    renderer.render(<LinkButton text='Test' />)
    const output = renderer.getRenderOutput()
    expect(output).to.be.deep.equal(
      <a className='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect' onClick={undefined}>
        Test
      </a>
    )
  })

  it('should render a NumberInput', () => {
    const renderer = createRenderer()
    renderer.render(
        <NumberInput id='test' label='Test' validationError='Error' value={3} onChange={_ => {}}/>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.be.deep.equal(
      <div className='mdl-textfield mdl-js-textfield' _radiumDidResolveStyles style={undefined}>
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
        onClick={undefined}
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
    expect(output).to.be.deep.equal(
      <button style={{margin: 5}} className=' mdl-button mdl-js-button mdl-button--raised mdl-button--accent' _radiumDidResolveStyles>
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

  it('should render an AddIconButton', () => {
    const renderer = createRenderer()
    renderer.render(
        <AddIconButton/>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.be.deep.equal(
      <button
        className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'
        onClick={undefined}
        style={undefined}>
        <i className='material-icons'>add</i>
      </button>
    )
  })

  it('should render an Attribute', () => {
    const renderer = createRenderer()
    renderer.render(
        <Attribute attribute='Key' value='Value'/>
    )
    const output = renderer.getRenderOutput()
    expect(output).to.be.deep.equal(
      <p style={{margin: 0}}><span style={{fontWeight: 600}}>Key</span> Value</p>
    )
  })
})
