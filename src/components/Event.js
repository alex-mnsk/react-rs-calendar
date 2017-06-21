import React from 'react';
import { matchPath } from 'react-router-dom';

import AboutEvent from './AboutEvent';
import AboutTask from './AboutTask';
import GoBack from './GoBackBtn';

const Event = ({ history, events, speakers, location }) => {
  let event;
  const trainers = [];
  let about;


  if (events.length !== 0 && speakers.length !== 0) {
    event = events.filter(e => e.id === location.pathname.slice(-24))[0];

    speakers.map((trainer) => {
      event.speakers.map((id) => {
        if (trainer.id === id) {
          trainers.push(trainer);
        }
      });
    });

    about = event.type !== 'deadline'
            ? (<AboutEvent
              type={event.type}
              title={event.title}
              description={event.description}
              start={event.start}
              duration={event.duration}
              location={event.location}
              speakers={trainers}
              additional={event.resources}
            />)
            : (<AboutTask
              type={event.type}
              title={event.title}
              description={event.description}
              start={event.start}
              duration={event.duration}
              location={event.location}
              speakers={trainers}
              additional={event.resources}
            />);
  }


  return (
    <div className="event-page">
      {about || <div className="loader" />}
      <GoBack history={history} />
    </div>
  );
};

export default Event;
