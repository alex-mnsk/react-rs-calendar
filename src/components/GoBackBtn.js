import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const GoBack = ({ history }) => (
  <div>
    <RaisedButton
      label="go back"
      primary
      onClick={history.goBack}
      style={{
          right: 0,
          marginTop: 10,
          marginBottom: 10
      }}
    />
  </div>
    );

export default GoBack;

