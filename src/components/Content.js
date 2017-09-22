import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import '../css/Content.css';

import SectionHeader from './SectionHeader';
import Image from './Common/Image';
import Video from './Video';
import SlideShowContainer from './SlideShow/SlideShowContainer';
import PollContainer from './Poll/PollContainer';
import Person from './Common/Person';
import Description from './Common/Description';

class Content extends Component {
  render() {
    const {
      content
    } = this.props;

    return (
      <div>
        {
          content.map((item, keyIndex) => {
            let component;
            const {
              type,
              guid,
              title,
              person,
              endStickyDate,
              date,
              description,
              imgUrl,
              altText,
              vidSrc
            } = item;

            switch (type) {
              case 'poll':
                component = <PollContainer poll={item} />;
                break;
              case 'slideShow':
                component = <SlideShowContainer postDate={date} />;
                break;
              case 'video':
                component = <Video vidSrc={vidSrc} title={title} />;
                break;
              case 'image':
                component = <Image imgUrl={imgUrl} altText={altText} />;
                break;
              case 'news':  
              default:
                component = null;
                break;
            }

            return (
              <section
                className={`event${endStickyDate && moment(endStickyDate, 'YYYY-MM-DD').isSameOrAfter(new Date(), 'day') ? ' sticky' : ''}`}
                key={guid}
              >
                <SectionHeader header={title} person={person} date={date} />
                {component}
                <Person person={person} />
                <Description description={description} />
              </section>
            );
          })
        }
      </div>
    );   
  }
}

Content.propTypes = {
  content: PropTypes.array.isRequired
}

export default Content;