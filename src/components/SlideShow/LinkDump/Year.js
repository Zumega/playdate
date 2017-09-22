import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Month from './Month';
import _ from 'lodash';

const Year = ({ year, date }) => {
  function setYear(month) {
    let data = [];
    let countIndex = 0;

    _.each(year, (month, key) => {
      data.push((
        <li key={`${key}_${countIndex++}`}>
          <Month month={month} date={key} />
        </li>
      ));
    })

    return data;
  }

  return (
    <div>
      <Header date={date} /> 
      <ul className="year">
        {
          setYear(year)
        }
      </ul>
    </div>
  );
}

Year.propTypes = {
  year: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
}

export default Year;