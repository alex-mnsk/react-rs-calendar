import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { AppBar, Tabs, Tab } from 'material-ui';


import Logo from './Logo';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

const CalendarHeader = ({ nextMonth, prevMonth, nextWeek, prevWeek, today, year, month, location }) => {
  const path = location.pathname;

  const prevHandle = () => {
    if (path === '/forWeek') return prevWeek();
    if (path === '/') return prevMonth();
  };

  const nextHandle = () => {
    if (path === '/forWeek') return nextWeek();
    if (path === '/') return nextMonth();
  };

  const todayHandle = () => {
    today();
  };

  return (
    <div className="header">
      <AppBar
        title={`${moment.months(month)} ${year}`}
        showMenuIconButton={false}
      >
      <Logo />
      </AppBar>
      <Tabs value={path}>
        <Tab
          className="arrow"
          value={1}
          onClick={prevHandle}
          label={<ArrowLeft />}
        />
        <Tab
          data-route="/"
          value={'/'}
          label="Month"
          containerElement={<Link to="/" />}
        />
        <Tab
          value={3}
          onClick={todayHandle}
          label="Today"
        />
        <Tab
          data-route="/forWeek"
          value={'/forWeek'}
          label="Week"
          containerElement={<Link to="/forWeek" />}
        />
        <Tab
          className="arrow"
          value={4}
          onClick={nextHandle}
          label={<ArrowRight />}
        />
      </Tabs>
    </div>
  );
};

export default CalendarHeader;

