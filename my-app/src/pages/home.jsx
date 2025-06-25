import React from 'react';
import { TripProvider } from '../context/tripcontext';
import TripSelectorcontainer from '../components/tripSelectorcontainer';

const Home = () => {
  return (
    <div className='home-container'>
      <h3 className="home-title">Book International And Domestic Flights</h3>
      <TripProvider>
        <TripSelectorcontainer />
      </TripProvider>
    </div>
  );
};

export default Home;
