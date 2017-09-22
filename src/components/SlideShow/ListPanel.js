import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListPanel = ({ content, next}) => {
  const count = content.length;

  function linkDump(item, index) {
    if (item.linkDump) {
      return (<Link to={item.url}>{item.text}</Link>);
    }
      
    return (<a onClick={() => next(index)}>{item.text}</a>)
  }

  const items = content.map((item, index) => (
    <li 
      className={`img_${count}${item.active ? ' active' : ''}`}
      key={index}
    >
      <span className="arrow"></span>
      {
        linkDump(item, index)
      }
    </li>
  ));

  return (
    <ul className="mainMenu left menu">
      {items}
    </ul>
  );
}

ListPanel.propTypes = {
  content: PropTypes.array.isRequired,
  next: PropTypes.func.isRequired
}

export default ListPanel;