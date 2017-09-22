import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DisplayPanel from './DisplayPanel';
import ListPanel from './ListPanel';

// TODO: need diff logic for vert/horz image sizes

class SlideShow extends Component {
  showItems;
  showLength;
  timer;
  seconds = 5;

  constructor(props) {
    super(props);

    const dateBits = props.postDate.split('-');
    let initState = props.content[dateBits[0]][dateBits[1]][dateBits[2]].slice(0, 9)

    // TODO: Do I want this if there are less than 9 items?
    initState.push({
      text: 'All images',
      url: '/link-dump/' + dateBits.join('/'),
      linkDump: true,
      active: false
    });

    this.state = {
      showItems: initState
    };

    this.showLength = this.state.showItems.length;

    this.next = this.next.bind(this);
    this.timed = this.timed.bind(this);
    this.init = this.init.bind(this);
  };

  updateTempState(indexId, map) {
    const tmpState = this.state.showItems;
    let item = this.state.showItems[indexId];
    item.active = map();
    tmpState[indexId] = item;

    return tmpState;
  };

  timed(nextIndex) {
    const self = this;

    let currentIndex;
    let count = this.showLength * 1;
    let newState = [];

    // move active to next image
    while (count--) {
      newState.unshift({...this.state.showItems[count]});
      newState[0].active = nextIndex === count;      

      if (newState[0].active === true) {
        currentIndex = count;
      }
    }

    this.setState({showItems: newState});

    this.timer = setTimeout(() => {
      nextIndex = ((currentIndex + 1) >= (this.showLength - 1)) ? 0 : (currentIndex + 1);
      self.timed(nextIndex);
    }, this.seconds * 1000);
  };

  next(index) {
    clearTimeout(this.timer);
    this.timed(index);
  };

  init() {
    if (this.showLength > 1) {
      let startingIndex = [];
      let count = this.showLength * 1;

      // looking for predefined active image
      while (count--) {
        if (this.state.showItems[count].active === true) {
          startingIndex.push(count);
        }
      }

      // no predefined active image
      if (startingIndex.length === 0) {
        startingIndex.push(0);
      } else if (startingIndex.length > 1) {
        console.error('Too many active items in the slide show.');
      } 
      
      this.setState({ showItems: this.updateTempState(startingIndex[0], () => true) });

      this.timer = setTimeout(() => {
        this.timed(startingIndex[0] + 1);
      }, this.seconds * 1000);
    }
  };

  componentWillMount() {
    this.init();
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const {
      showItems
    } = this.state;

    return (
      <div id="slideShow" className="clear">
        <DisplayPanel images={showItems} />
        <ListPanel content={showItems} next={this.next} />
      </div>
    );
  };
}

SlideShow.propTypes = {
  content: PropTypes.object.isRequired,
  postDate: PropTypes.string.isRequired
}

export default SlideShow;