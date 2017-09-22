import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Image from '../../Common/Image';
import Description from '../../Common/Description';

const Day = ({ day, date }) => {
  return (
    <div>
      <Header date={date} /> 
      <ul className="day">
        {
          day.map((item, key) => (
            <li
              className="clear"
              key={key}
            >
              <Image imgUrl={item.image} title={item.text} altText={item.text}  />
              {
                item.description && item.description.length && (<Description description={item.description} css={'left'} />)
              }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Day.propTypes = {
  day: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired
}

export default Day;