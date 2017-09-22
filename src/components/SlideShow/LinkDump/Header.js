import React from 'react';
import PropTypes from 'prop-types';

const Header = ({date}) => {
  return (
    <h2 className={`${date} header`}>{date}<span></span></h2>
  );
}

Header.propTypes = {
  date: PropTypes.string.isRequired
}

export default Header;