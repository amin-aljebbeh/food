import React, { Component } from 'react';
import Router from './src/components/Router';
import firebase from 'firebase'
class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAikOrCBmHtPTfDHdph-HJjrxyUiwKfNrc",
      authDomain: "contractor-9cd12.firebaseapp.com",
      databaseURL: "https://contractor-9cd12.firebaseio.com",
      projectId: "contractor-9cd12",
      storageBucket: "contractor-9cd12.appspot.com",
      messagingSenderId: "864925525757"
    };
    

    firebase.initializeApp(config);
  }

  
  render() {

    return (
        <Router />
    );
  }
}

export default App;
