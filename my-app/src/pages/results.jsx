import React from 'react';
import SearchBar from '../components/SearchBar';
import './results.css';
import Sidebar from '../components/sidebar';
import Flights from '../components/flights';

const Results = () => {
  return (
    <div >
      <div className="results-container"> 
        <SearchBar />
        </div>

      <div className='content'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        
      <div className='flights'>
        <Flights />
        </div>
      
      </div>
      
      
     
    </div>
  );
};

export default Results;
