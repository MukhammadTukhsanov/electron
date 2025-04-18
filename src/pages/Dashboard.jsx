import { signOut } from 'firebase/auth';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartBar, FaLayerGroup, FaLightbulb, FaTasks } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../assets/css/dashboard.css';
import { Navabar } from '../components/Navbar';
import { auth } from '../firebase/config';

export default function Dashboard() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };
  return (
    <div className='container-fluid dash'>
      <Navabar />
      {!showEducation && (
        <div className='menu'>
          <div className='menu-item d-box' onClick={() => setShowEducation(true)}>
            <FaLightbulb className='icon' />
            <h1>Ta’lim</h1>
          </div>
          <div className='menu-item d-box'>
            <FaChartBar className='icon' />
            <h1>Bosqichli Test</h1>
          </div>
          <div className='menu-item d-box'>
            <FaTasks className='icon' />
            <h1>Yakuniy Test</h1>
          </div>
          <div className='menu-item d-box'>
            <FaLayerGroup className='icon' />
            <h1>Test Variantlari</h1>
          </div>
        </div>
      )}

      {showEducation && (
        <div className='edu'>
          <button onClick={() => setShowEducation(false)}>Ortga</button>
          {/* Here you can add your education content */}
        </div>
      )}
    </div>
  );
}
