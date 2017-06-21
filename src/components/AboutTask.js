import React from 'react';
import moment from 'moment';

import Speakers from './Speakers';
import Feedback from './Feedback';

const AboutTask = ({ type, title, description, start, duration, location, speakers, additional }) => (
  <div className="about-event">

    <h2 className={`title ${type}`}>
      {`Task: ${title}`}
    </h2>
    <div className="repo">
      <p>Task commit to your RS privat repo</p>
      <p>{`Folder name: ${title}`}</p>
    </div>
    <p className="description">
      {description}
    </p>
    <div className="start">
      <h4>Dedline:</h4>
      <p>{moment(start).format('dddd, MMMM Do YYYY, H:mm')}</p>
    </div>
    <div className="mentor">
      <h4>Your mentor</h4>
      <Speakers speakers={speakers} />
      <p>
          e-mail: <a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">mentor@rs.com</a>
      </p>
      <p>
        skype: <a href="skype:NZeraF?call" target="_top">@mentor</a>
      </p>
    </div>
    <div className="feedback">
      <h4>Give your feedback:</h4>
      <div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeN-OYDhazcs7WhZi_oae-u8bCLuVcsksCeZkYcfRMMwj3eJA/viewform">
          <Feedback />
        </a>
      </div>
    </div>
  </div>
    );

export default AboutTask;
