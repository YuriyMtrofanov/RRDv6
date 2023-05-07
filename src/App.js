import React from 'react';
import MainPage from './pages/mainPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import UsersListPage from './pages/usersListPage';

function App() {
  return (
    <div>
      <h1>AppLayout</h1>
      <Switch>
        <Route path="/users/:userId?/:edit?" component={UsersListPage}/>
        <Route path="/" exact component={MainPage}/>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
