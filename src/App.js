import React from 'react';
import MainPage from './pages/mainPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import UsersListPage from './pages/usersListPage';
import UserPage from './pages/userPage';
import UserEditPage from './pages/userEditPage';
// import UsersTable from './pages/usersTable';

function App() {
  return (
    <div>
      <h1>AppLayout</h1>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="users/*" element={<UsersListPage/>}>
          <Route path=":userId/*" element={<UserPage />}>
            <Route path=":edit/*" element={<UserEditPage />}/>
            <Route path=":edit/*" element={<Navigate to="/edit"/>}/>
          </Route>
          <Route path=":userId/*" element={<Navigate to="/users"/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
