import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import UserContext from './UserContext';
import { FAKE_USER } from './api';

class Root extends React.Component {
  state = {
    currentUser: FAKE_USER
  };

  handleLogin = user => {
    this.setState({ currentUser: user });
  };

  handleLogout = () => {
    this.setState({ currentUser: null });
  };

  render() {
    return this.state.currentUser ? (
      <UserContext.Provider value={{user: this.state.currentUser, isContext: 'defaultStore'}}>
        <MainPage onLogout={this.handleLogout} />
      </UserContext.Provider>
    ) : (
      <LoginPage onLogin={this.handleLogin} />
    );
  }
}

ReactDOM.render(<Root />, document.querySelector('#root'));
