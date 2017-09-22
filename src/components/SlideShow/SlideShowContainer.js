import React, { Component } from 'react';
import slideshow from '../../slideshow.json';
import '../../css/SlideShow.css';

import SlideShow from './SlideShow';

class SlideShowContainer extends Component {
  render() {
    const {
      postDate
    } = this.props;

    return (
      <div className='slideshowContainer'>
        <SlideShow content={slideshow} postDate={postDate} />
      </div>
    );
  }
}

export default SlideShowContainer;