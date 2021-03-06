import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Day from './Day';
import _ from 'lodash';


const Month = ({ month, date }) => {
  function setMonth (month) {
    let data = [];
    let countIndex = 0;

    _.each(month, (day, key) => {
      data.push((
        <li key={`${key}_${countIndex++}`}>
          <Day day={day} date={key} />
        </li>
      ));
    })
    
    return data;
  }

  return (
    <div>
      <Header date={date} /> 
      <ul className="month">
        {
          setMonth(month)
        }
      </ul>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
}

export default Month;