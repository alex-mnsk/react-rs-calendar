import React, { Component } from 'react';
import moment from 'moment';

import Week from './Week';
import WeekNames from './WeekNames';
import EventsMarks from './EventsMarks';

class Month extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.weeks;
    this.weeksNum;
    this.firstWeek;
  }

  componentWillMount() {
    this.props.today();
  }

  render() {
    this.firstWeek = moment([this.props.year, this.props.month, 1]).week();
    this.weeks = [];
      this.weeksNum = [
      this.firstWeek - 1,
      this.firstWeek,
      this.firstWeek + 1,
      this.firstWeek + 2,
      this.firstWeek + 3,
      this.firstWeek + 4,
      this.firstWeek + 5,
    ];

    this.weeksNum.map((week, i) => {
      this.weeks.push(
        <Week
          key={week}
          indx={i}
          week={week}
          year={this.props.year}
          month={this.props.month}
          events={this.props.events}
          firstWeek={this.weeksNum[0]}
          lastWeek={this.firstWeek + 4}
        />,
      );
    });

    return (
          <div className="month">
            <WeekNames />
            {this.weeks}
            <EventsMarks />
          </div>
    );
  }
}

export default Month;
