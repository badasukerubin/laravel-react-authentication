import React, {Component} from 'react'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
// check if user is authenticated and storing authentication data as states if true
  componentWillMount() {
    let state = localStorage["appState"];
    if (state) {
      let AppState = JSON.parse(state);
      this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState.user });
    }
  }
// 4
render() {
    return (
      <div>
        <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
          <span>Whatever normally goes into the user dasboard page; the table below for instance</span>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row ">User Id</th>
                <td>{this.user.id}</td>
              </tr>
              <tr>
                <th scope="row ">Full Name</th>
                <td>{this.user.name}</td>
              </tr>
              <tr>
                <th scope="row ">Email</th>
                <td>{this.user.email}</td>
              </tr>
            </tbody>
          </table>
        <Footer/>
      </div>
      )
    }
  }
export default Home