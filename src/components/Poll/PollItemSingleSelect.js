import React from 'react';
import PropTypes from 'prop-types';

const PollItemSingleSelect = ({ item, pollId, name }) => {
  return (
    <input
      type="radio"
      id={pollId}
      name={name}
      value={item.id}
    />
  );
}

PollItemSingleSelect.propTypes = {
  item: PropTypes.object.isRequired,
  pollId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default PollItemSingleSelect;