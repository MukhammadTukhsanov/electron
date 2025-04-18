import React from 'react';

import { useEffect, useState } from 'react';
import '../assets/css/login-page.css';
import pageBg from '../assets/images/graphic3.svg';
import logo from '../assets/images/logoColor.svg';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (err) {
      console.log('Error is set:', err);

      const timer = setTimeout(() => {
        setErr(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [err]);

  return (
    <div className='login-page'>
      {err && (
        <div className='d-flex w-100 justify-content-center position-absolute top-0'>
          {/* <Alert className='danger-alert text-center py-2 mt-4 d-flex gap-2 align-items-center'>
            <FaInfoCircle />
            Foydalanuvchi topilmadi!
          </Alert> */}
        </div>
      )}
      <div className='img-holder'>
        <div className='info-holder'>
          <img src={pageBg} alt='login-page-bg' />
        </div>
      </div>
      <div className='login-layout'>
        <img src={logo} alt='logo-avtostart' width={300} />
        <div className='form-content'>
          <LoginForm setErr={setErr} />
        </div>
      </div>
    </div>
  );
};

export default Login;
