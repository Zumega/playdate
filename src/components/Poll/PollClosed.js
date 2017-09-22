import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PollClosed extends Component {
  render() {
    const {
      poll,
      setItemWidth
    } = this.props;

    return (
      <div>
        <ul className="graph">
          {
            poll.map((item, index) => (
              <li key={item.id}>
                <strong>{item.label}:</strong>
                <div className="graphBar" style={{'width': setItemWidth(item.total)}}>
                  <span>{item.total} total votes</span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

PollClosed.propTypes = {
  poll: PropTypes.array.isRequired,
  setItemWidth: PropTypes.func.isRequired
}

export default PollClosed;