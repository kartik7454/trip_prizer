import React from 'react';
import { Navbar } from '../components/navBar';
import { TripProvider } from '../context/tripcontext';
import TripSelectorcontainer from '../components/tripSelectorcontainer';
import { Footer } from '../components/footer';

const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='home-container'>
<h3>Book International And Domestic Flights</h3>
<TripProvider >
    <TripSelectorcontainer />
    </TripProvider>

    </div>
    <Footer />
    </div>
  );
};

export default Home;
