import React, { Component } from 'react';

import Week from './Week';
import WeekNames from './WeekNames';

class ForWeek extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.weeks;
    this.weeksNum = [this.props.week];
  }

  componentWillMount() {
    this.props.today();
  }

  render() {
    this.weeks = [];
    this.weeksNum.map((week, i) => {
      this.weeks.push(
        <Week
          key={this.props.week}
          indx={i}
          week={this.props.week}
          year={this.props.year}
          month={this.props.month}
          events={this.props.events}
          className={'for-week'}
        />,
        );
    });
    return (
      <div className="month">
        <div className="week-num">
          <span>{`WEEK: ${this.props.week}`}</span>
        </div>
        <WeekNames className={'for-week-names'} />
        {this.weeks}
      </div>
    );
  }
}

export default ForWeek;
