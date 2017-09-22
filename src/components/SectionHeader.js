import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Date from './Common/Date';

class SectionHeader extends Component {
  render() {
    const {
      header,
      date
    } = this.props;

    return (
        <h2>
          {header}
          <Date date={date} />
        </h2>
    );
  }
}

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default SectionHeader;


      
    