import React from 'react';

const Speakers = ({ speakers }) => (
  <div className="speakers">
    {speakers.map((speaker, i) => <div key={i} className="speaker">
      <div className="avatar"><img src={`${speaker.avatar}`} /></div>
      <div className="speaker-name">{speaker.name}</div>
    </div>)}
  </div>
    );

export default Speakers;
