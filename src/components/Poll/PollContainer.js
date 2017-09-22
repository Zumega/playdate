import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PollClosed from './PollClosed';
import PollActive from './PollActive';
import moment from 'moment';
import _ from 'lodash';
import '../../css/Poll.css';
 
class PollContainer extends Component {
  constructor(props) {
    super(props);

    // TODO: get allready voted from API
    this.state = {
      options: _.sortBy(props.poll.options, (o) => o.label),
      pollClosed: moment(props.poll.endDate).isBefore(new Date())
    }

    this.handlePollClick = this.handlePollClick.bind(this);
  }

  handlePollClick(id) {
    const itemId = id.split('_')[1];
    var count = this.state.options.length;
    var items = this.state.options;
    var item;

    while (count--) {
      if ((items[count].id + '') === itemId) {
        item = { ...items[count]};
        item.total += 1;
        items[count] = item;
      }
    }


    this.setState({
      options: items,
      pollClosed: true
    });

    // TODO: save state in API
  }

  render() {
    const {
      poll
    } = this.props;
    const {
      guid,
      title,
      multiSelect
    } = poll;
    const {
      options
    } = this.state;

    const maxTotal = options.reduce((sum, value) => {
      return sum + value.total
    }, 0);

    function setItemWidth(pollTotal) {
      return (((100 / maxTotal) * pollTotal)) + '%';
    }

    const pollType = (this.state.pollClosed) ?
      <PollClosed 
        poll={options} 
        setItemWidth={setItemWidth}
      /> :
      <PollActive 
        pollGuid={guid} 
        title={title}
        multiSelect={multiSelect}
        poll={options}
        handlePollClick={this.handlePollClick}
      />;

    return (
      <div className="pollContainer">
        {pollType}
      </div>
    );
  }
}

PollContainer.propTypes = {
  poll: PropTypes.object.isRequired
}

export default PollContainer;