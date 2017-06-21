import React from 'react';
import moment from 'moment';

import { getDayInWeek } from '../actions/actions';
import Day from './Day';


const Week = ({ week, year, indx, events, firstWeek, lastWeek, className }) => {
  const days = [];
  let date;
  let isAnotherMonthDay;

  for (let i = 0; i < 7; i++) {
    date = moment(getDayInWeek(year, week, i)).get('date');
    isAnotherMonthDay = () => {
      if (firstWeek - 1) {
        return (week === firstWeek || week === firstWeek + 1)
                    && date > 8 || week >= lastWeek && date < 23;
      }
    };
    days.push(
      <Day
        key={`${week}-${i + 1}`}
        events={events}
        date={date}
        week={week}
        year={year}
        anotherMonthDay={isAnotherMonthDay()}
        className={className}
      />,
        );
  }


  return (
    <div className={`${className ? 'one-week' : `week week-${indx + 1}`}`}>
      {days}
    </div>
  );
};

export default Week;
