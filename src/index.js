import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import awsExports from './aws-exports';
Amplify.configure(config);
Amplify.configure(awsExports);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);