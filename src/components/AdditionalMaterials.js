import React from 'react';

const AdditionalMaterials = ({ additional }) => {

  return (
    <div className="additional-materials">
      <div className="materials">
        <h2>RESOURCES</h2>
        {additional.map((material, i) => <div key={i} className="material">
          <h3 className="material-type">{material.type}</h3>
          <div className="material-description">{material.description}</div>
          <h4>Link</h4>
          <div className="material-resource">{material.resource}</div>
        </div>)}
      </div>
    </div>
  );
};

export default AdditionalMaterials;
