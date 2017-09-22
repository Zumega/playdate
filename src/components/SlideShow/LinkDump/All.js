import React from 'react';
import PropTypes from 'prop-types';
import Year from './Year';
import _ from 'lodash';

const All = ({ content }) => {
  function setAll(content) {
    let data = [];
    let countIndex = 0;

    _.each(content, (year, key) => {
      data.push((
        <li key={`${key}_${countIndex++}`}>
          <Year year={year} date={key} />
        </li>
      ));
    })

    return data;
  }

  return (
    <div>
      <ul className="all">
        {
          setAll(content)
        }
      </ul>
    </div>
  );
}

All.propTypes = {
  content: PropTypes.object.isRequired
}

export default All;