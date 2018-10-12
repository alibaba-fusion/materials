import React, { Component } from 'react';

import Crumb from '../../components/Crumb';
import SignupForm from './components/SignupForm';
import RegisterForm from './components/RegisterForm';

export default class Login extends Component {
  static displayName = 'Login';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="login-page" >
      <Crumb match={this.props.match} />
      <SignupForm />
      <RegisterForm />
    </div>;
  }  
}
