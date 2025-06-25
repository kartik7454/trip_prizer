import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navBar';
import { Footer } from '../components/footer';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />{/* special React Router component that renders the current route's content */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 