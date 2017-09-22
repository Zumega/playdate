import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PollItemSingleSelect from './PollItemSingleSelect';
import PollItemMultiSelect from './PollItemMultiSelect';

class PollActive extends Component {
  render() {
    const {
      pollGuid,
      title,
      multiSelect,
      poll,
      handlePollClick
    } = this.props;

    function singleMuli(option, pollId) {
      return (multiSelect === true) ? 
        <PollItemMultiSelect item={option} pollId={pollId} name={`${pollGuid}_checkbox`} /> :
        <PollItemSingleSelect item={option} pollId={pollId} name={`${pollGuid}_radio`} />;
    }

    return (
      <form name={title} className="pollForm">
        <ul>
          {
            poll.map((option) => {
              const pollId = `${pollGuid}_${option.id}`;

              return (
                <li key={pollId}>
                  {singleMuli(option, pollId)}
                  <label
                    htmlFor={`${pollId}_input`}
                    onClick={() => handlePollClick(pollId)}
                  >
                    {option.label}
                  </label>
                </li>
              );
            })
          }
        </ul>
      </form>
    );
  }
}

PollActive.propTypes = {
  pollGuid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  multiSelect: PropTypes.bool.isRequired,
  poll: PropTypes.array.isRequired,
  handlePollClick: PropTypes.func.isRequired
}

export default PollActive;