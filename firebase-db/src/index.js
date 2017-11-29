import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //bootstrap (bundled)
import './index.css'; //our css (bundled)

import App from './App';

import firebase from 'firebase/app';
import 'firebase/database';

// TODO: input your own firebase configuration
var config = {
    apiKey: "AIzaSyBmh6oan1wcTSwbm3M1KLRMjYkIsI_hPmM",
    authDomain: "fir-demo-bbasinsk.firebaseapp.com",
    databaseURL: "https://fir-demo-bbasinsk.firebaseio.com",
    projectId: "fir-demo-bbasinsk",
    storageBucket: "",
    messagingSenderId: "386051226703"
    };
    firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
