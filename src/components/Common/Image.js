import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Image.css';

const Image = ({imgUrl, altText}) => {
  const img = (imgUrl.indexOf('http') >= 0) ? imgUrl : require(`../../imgs/content/${imgUrl}`);
  
  return (
    <div className="imageContainer">
      <img src={img} title={altText} alt={altText} />
    </div>
  );
}

Image.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired
}

export default Image;