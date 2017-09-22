import React, { Component } from 'react';
import _ from 'lodash';
import slideshow from '../../../slideshow.json';

import Day from './Day';
import Month from './Month';

class LinkDumpContainer extends Component {
  constructor(props) {
    super(props);

    this.selectedDate = (!_.isEmpty(props.route.match.params)) ? Object.values(props.route.match.params) : [];    
  }

  getDateData(date) {
    return _.get(slideshow, date, null);
  }

  getDisplay() {
    const fullDate = this.selectedDate.join('-');
    let dom = null;
    let data;

    data = this.getDateData(this.selectedDate);

    if (data !== null) {
      switch (this.selectedDate.length) {
        case 1:
          // dom = <Year />
          break;
        case 2:
          dom = <Month month={data} date={fullDate} />
          break;
        case 3:
          dom = <Day day={data} date={fullDate} />
          break;
        default:
          // dom = <All />
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

        
        {/* <div ng-if="!vm.noData.active" ng-switch="vm.linkDump.type">
          <p>{{vm.selectedDate}}</p>
          <ul ng-switch-when="day">
            <li class="clear" ng-repeat="dayItem in vm.linkDump.data track by $index" ng-include="'./templates/includes/linkdumpitem.html'"></li>
          </ul>

          <ul ng-switch-when="month">
            <li ng-repeat="(day, days) in vm.linkDump.data track by $index">
              {{day}}
              <ul>
                <li class="clear" ng-repeat="dayItem in days track by $index" ng-include="'./templates/includes/linkdumpitem.html'"></li>
              </ul>
            </li>
          </ul>

          <ul ng-switch-when="year">
            <li ng-repeat="(month, months) in vm.linkDump.data track by $index">
              {{month}}
              <ul>
                <li ng-repeat="(day, days) in months track by $index">
                  {{day}}
                  <ul>
                    <li class="clear" ng-repeat="dayItem in days track by $index" ng-include="'./templates/includes/linkdumpitem.html'"></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <ul ng-switch-default>
            <li ng-repeat="(year, years) in vm.linkDump.data track by $index">
              {{year}}
              <ul>
                <li ng-repeat="(month, months) in years track by $index">
                  {{month}}
                  <ul>
                    <li ng-repeat="(day, days) in months track by $index">
                      {{day}}
                      <ul>
                        <li class="clear" ng-repeat="dayItem in days track by $index" ng-include="'./templates/includes/linkdumpitem.html'"></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
      </section>
    )
  }
}

export default LinkDumpContainer;