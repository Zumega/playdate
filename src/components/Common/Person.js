import React from 'react';
import PropTypes from 'prop-types';

const Person = ({person}) => {
  if (person) {
    return (
      <div className="author">
        Posted by: {person}
      </div>
    );
  }

  return <span />;
}

Person.propTypes = {
  person: PropTypes.string
}

export default Person;