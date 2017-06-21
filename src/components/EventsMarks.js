import React from 'react';

const EventMarks = () => (
  <div className="event-marks">
    <div className="mark-wrapper">
      <div className="mark deadline" />
      <div className="mark-name"><p> - deadline</p></div>
    </div>
    <div className="mark-wrapper">
      <div className="mark webinar" />
      <div className="mark-name"><p> - webinar</p></div>
    </div>
    <div className="mark-wrapper">
      <div className="mark lecture" />
      <div className="mark-name"><p> - lecture</p></div>
    </div>
    <div className="mark-wrapper">
      <div className="mark event" />
      <div className="mark-name"><p> - event</p></div>
    </div>
    <div className="mark-wrapper">
      <div className="mark workshop" />
      <div className="mark-name"><p> - workshop</p></div>
    </div>
  </div>
    );

export default EventMarks;
