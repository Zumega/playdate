import React from 'react';
import PropTypes from 'prop-types';

const Video = ({vidSrc, title}) => {
  return (
    <div className="videoContainer">
      <iframe 
        width="778" 
        height="438" 
        src={`https://www.youtube.com/embed/${vidSrc}`} 
        frameBorder="0" 
        allowFullScreen
        title={title}
      />
    </div>
  );
}

Video.propTypes = {
  vidSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Video;