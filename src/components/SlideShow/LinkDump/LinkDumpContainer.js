import React, { Component } from 'react';
import _ from 'lodash';
import '../../../css/LinkDump.css';
import slideshow from '../../../slideshow.json';
import Day from './Day';
import Month from './Month';
import Year from './Year';
import All from './All';

class LinkDumpContainer extends Component {
  constructor(props) {
    super(props);

    this.selectedDate = (!_.isEmpty(props.route.match.params)) ? Object.values(props.route.match.params) : null;
  }

  getDateData(date) {
    return _.get(slideshow, date, null);
  }

  getDisplay() {
    let dom = null;
    let data;

    if (this.selectedDate === null) {
      return <All content={slideshow} />;
    }

    const fullDate = this.selectedDate.join('-');

    data = this.getDateData(this.selectedDate);

    if (data !== null) {
      switch (this.selectedDate.length) {
        case 1:
          dom = <Year year={data} date={fullDate} />
          break;
        case 2:
          dom = <Month month={data} date={fullDate} />
          break;
        default:
          dom = <Day day={data} date={fullDate} />
          break;
      }
    } else {
      dom = <p>Sorry, there is no link dump for the date of <strong>{this.selectedDate.join('-')}</strong>.</p>;
    }

    return dom;
  }

  render () {
    return (
      <section id="linkDump">
        {
          this.getDisplay()
        }
      </section>
    )
  }
}

export default LinkDumpContainer;