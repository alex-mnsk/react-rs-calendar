import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Day = ({ events, year, week, date, anotherMonthDay, className }) => {
  let eventWeek;
  let eventDate;
  let eventYear;

  const isToday = () =>
    moment().get('date') === date && moment().isoWeek() === week && moment().year() === year;

  const eventsForDay = events.filter((event) => {
    eventWeek = moment(event.start).week();
    eventDate = moment(event.start).get('date');
    eventYear = moment(event.start).get('year');
    if (week === eventWeek && eventDate === date && eventYear === year) {
      return event;
    }
  });

  return (
    <div className={`${className || 'day'} ${isToday() ? 'today' : ''} ${anotherMonthDay ? 'another-month' : 'curr-month'}`}>
      <p className={'date'}>
        {date}
      </p>
      {eventsForDay.map((event, i) => <Link key={`event-${i + 1}`} to={`/event/${event.id}`}>
        <p key={`event-${i + 1}`} className={`${event.type} event-name event-${i + 1}`}>
          {event.type}
        </p>
      </Link>)}
    </div>
  );
};

export default Day;
