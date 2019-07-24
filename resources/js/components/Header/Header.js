import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom';
class Header extends Component {
  // 1.1
  constructor(props) {
    super(props);
      this.state = {
        user: props.userData,
        isLoggedIn: props.userIsLoggedIn
      };
      this.logOut = this.logOut.bind(this);
  }
  // 1.2
  logOut() {
    let appState = {
      isLoggedIn: false,
      user: {}
    };
    localStorage["appState"] = JSON.stringify(appState);
    this.setState(appState);
    this.props.history.push('/login');
  }
  // 1.3
  render() {
    const aStyle = {
      cursor: 'pointer'
    };
    
    return (
      <nav className="navbar">
        <ul>
          <li><Link to="/">Index</Link></li>
          {this.state.isLoggedIn ? 
           <li className="has-sub"><Link to="/dashboard">Dashboard</Link></li> : ""}
          {!this.state.isLoggedIn ?
            <li><Link to="/login">Login</Link> | <Link to="/register">Register</Link></li> : ""}
        </ul>
      </nav>
    )
  }
}
export default withRouter(Header)