import PropTypes from 'prop-types';
import React from 'react';

import { SelectableButton, LinkButton } from './UI'
import CostList from './CostList'

class CostDetails extends React.Component {
  static propTypes = {
    costs: PropTypes.object,
    connection: PropTypes.object
  };

  state = { activeMonth: '', isOpen: true };

  render() {
    const { activeMonth, isOpen } = this.state
    const { costs, connection, onSortCosts } = this.props

    return (
      <div style={{margin: 20}}>
        <LinkButton text='Cost Details' onClick={() => this.setState({isOpen: !isOpen})}/>
          {isOpen && (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
              {Object.keys(costs).map((month) => (
                <SelectableButton
                  style={{margin: 5}}
                  key={month}
                  onClick={() => {
                    if (month === activeMonth) {
                      this.setState({activeMonth: ''})
                    } else {
                      this.setState({activeMonth: month})
                    }
                  }}
                  selected={month === activeMonth}
                  text={month} />
              ))}
            {activeMonth && <CostList costs={costs[activeMonth]} connection={connection} onSortCosts={onSortCosts}/>}
            </div>
          )}
      </div>
    )
  }
}

export default CostDetails
