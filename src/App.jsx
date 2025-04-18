import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  console.log('Rendering App component');
  return (
    // <AuthProvider>
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
    </Routes>
    // </AuthProvider>
  );
}

export default App;
