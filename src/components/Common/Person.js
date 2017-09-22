import React from 'react';
import PropTypes from 'prop-types';

const Person = ({person}) => {
  if (person) {
    return (
      <h4 className="postedBy">
        Posted by: {person}
      </h4>
    );
  }

  return <span />;
}

Person.propTypes = {
  person: PropTypes.string
}

export default Person;