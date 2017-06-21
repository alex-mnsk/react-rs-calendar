import React from 'react';
import { Map, Marker } from 'yandex-map-react';
import moment from 'moment';


import AdditionalMaterials from './AdditionalMaterials';
import Speakers from './Speakers';
import Feedback from './Feedback';

const AboutEvent = ({ type, title, description, start, duration, location, speakers, additional }) =>
    (
      <div className={'about-event'}>
        <h2 className={`type ${type}`}>
          {type}
        </h2>
        <h3 className="title">
          {title}
        </h3>
        <div className="description">
          {description}
        </div>
        <div className="start">
          { moment(start).format('dddd, MMMM Do YYYY, H:mm')}
        </div>
        <div className="duration">
          <p>{`Duration: ${moment(duration).format('hh:mm')}`}</p>
        </div>
        <div className="location">
          <p>{location}</p>
          <div className="map">
            <Map center={[53.927703, 27.681190]} width={'100%'} height={300} zoom={15}>
              <Marker lat={53.927703} lon={27.681190} />
            </Map>
          </div>
        </div>
        <Speakers speakers={speakers} />
        <AdditionalMaterials additional={additional} />
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

export default AboutEvent;
