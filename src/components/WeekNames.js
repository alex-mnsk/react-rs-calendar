import React, { Component } from 'react';

const WeekNames = ({ className }) => (
  <div className={`${className || 'week-names'}`}>
    <p className="day-name">Mon</p>
    <p className="day-name">Tue</p>
    <p className="day-name">Wed</p>
    <p className="day-name">Thu</p>
    <p className="day-name">Fri</p>
    <p className="day-name">Sat</p>
    <p className="day-name">Sun</p>
  </div>
    );

export default WeekNames;
