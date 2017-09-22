import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Date = ({date}) => {
  return (
    <span className="eventDate">
      {/* TODO: Do I want this big here? */}
      {/* <span class="sticky" ng-if="event.endDate"> */}
        {/* {{event.daysLeft}} days left */}
      {/* </span> */}
      Posted on {moment(date, 'YYYY-MM-DD').format('MMM DD, YYYY')}
    </span>
  );
}

Date.propTypes = {
  date: PropTypes.string.isRequired
}

export default Date;