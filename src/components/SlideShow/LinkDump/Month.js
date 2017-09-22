import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Day from './Day';

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
    <ul>
      <li>
        {date}
      </li>
      <ul>
        {
          setMonth(month)
        }
      </ul>
    </ul>
  );
}

Month.propTypes = {
  month: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
}

export default Month;




/* <ul ng-switch-when="month">
  <li ng-repeat="(day, days) in vm.linkDump.data track by $index">
    {{ day }}
    <ul>
      <li class="clear" ng-repeat="dayItem in days track by $index" ng-include="'./templates/includes/linkdumpitem.html'"></li>
    </ul>
  </li>
</ul> */