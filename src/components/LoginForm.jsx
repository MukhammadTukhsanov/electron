import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/css/login-page.css';
import { auth } from '../firebase/config';
import { CustomButton } from './CustomButton';
import { CustomInput } from './CustomInput';

export default function LoginForm({ setErr }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      setErr('invalid');
      // alert('Login failed: ' + err.message);
    }
  };

  return (
    <form className='form-items' onSubmit={handleLogin}>
      <h3>Kirish</h3>
      <p className='mt-3'>Xizmatdan foydalanish uchun taqdim etilgan Email va Parollni kiriting</p>
      <CustomInput
        type='email'
        placeholder='Email'
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        type='password'
        placeholder='Paroll'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <CustomButton className={'primary mt-3'} type={'submit'} text={'Kirish'} />

      <div className='other-links'>
        <p className='mb-3'>Yoki aloqaga chiqing</p>
        <div className='d-flex gap-1 w-100'>
          {/* <div className='other-links-item col'>
            <FaPhoneAlt />
            <span>+998 88 237 77 47</span>
          </div> */}
          <div className='other-links-item gap-1 col'>
            <FaTelegram className='telegram-icon' />
            <span>@telegram</span>
          </div>
          <div className='other-links-item gap-1 col'>
            <FaWhatsapp className='whatsapp-icon' />
            <span>94 123 34 56</span>
          </div>
        </div>
      </div>
    </form>
  );
}
