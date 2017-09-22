import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Common/Image';
import Description from '../Common/Description';

const DisplayPanel = ({images}) => {
  return (
    <div>
      {
        images.map((item, index) => {
          if (item.active) {
            return (
              <div className="mainDisplay left" key={index}>
                <Image imgUrl={item.image} altText={item.text} />
                <Description css="info" description={item.description} />
              </div>
            );
          }

          return null;
        })
      }
    </div>
  );
}

DisplayPanel.propTypes = {
  images: PropTypes.array.isRequired
}

export default DisplayPanel;


