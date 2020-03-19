import React, {Component} from 'react';
import LoginContainer from './LoginContainer';
import {withRouter} from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: props.location,
    };
  }
  render() {
    return (
      <div className="content">
        <LoginContainer redirect={this.state.redirect} />
      </div>
    )
  }
}
export default withRouter(Login)
