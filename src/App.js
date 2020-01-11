import React, { Component } from 'react';
import SignIn from './signin/SignIn';
import SignUp from './signup/SignUp';

class App extends Component {
  render() {
    return (
      <div>
        <SignIn/>
        <SignUp/>
      </div>
    );
  }
}

export default App;
