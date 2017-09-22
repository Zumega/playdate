import React from 'react';
import PropTypes from 'prop-types';

const Description = ({description, css}) => {  
  return (
    <div className={css}>
      {
        description.map((data, index) => (<p key={index}>{data}</p>))
      }
    </div>
  );
}

Description.propTypes = {
  description: PropTypes.array.isRequired,
  css: PropTypes.string
};

export default Description;