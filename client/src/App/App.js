import './App.css';

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, browserHistory,Redirect } from 'react-router-dom';
import Home from '../containers/Home/Home'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token:'',
      isAuthenticated: false
    };

    this.toggleSignState = this.toggleSignState.bind(this);
    this.loginCallBack = this.loginCallBack.bind(this);
  }

  toggleSignState() {
    this.setState({
      staySigned: !this.state.staySigned
    });
  }

  loginCallBack=(res) => {
    
      this.setState({
        token : res.data.token,
        name: `${res.data.user.firstName} ${res.data.user.lastName}`,
        phone: res.data.user.phone,
        email: res.data.user.email,
        class: res.data.user.class,
        major: res.data.user.major,
        status: res.data.user.status,
        photoURL: res.data.user.photoURL,
        isAuthenticated:true

      })
  };
  

  render() {
    return (
      <Router >
        <div>
          <Route exact path='/' render={()=><Home/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
