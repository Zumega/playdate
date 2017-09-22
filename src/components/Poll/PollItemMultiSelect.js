import React from 'react';
import PropTypes from 'prop-types';

const PollItemMultiSelect = ({ item, pollId, name }) => {
  return (
    <input
      type="checkbox"
      id={pollId}
      name={name}
      value={item.id}
    />
  );
}

PollItemMultiSelect.propTypes = {
  item: PropTypes.object.isRequired,
  pollId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default PollItemMultiSelect;