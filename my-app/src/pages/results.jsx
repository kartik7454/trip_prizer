import React from 'react';
import SearchBar from '../components/SearchBar';
import './results.css';
import Sidebar from '../components/sidebar';
import Flights from '../components/flights';

import { FilterProvider } from '../context/sideBarContext';



const Results = () => {
  return (
    <div >
    
      
        <div className="results-container"> 
          <SearchBar />
        </div>
      <FilterProvider>
        <div className='content'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          
          <div className='flights'>
            <Flights />
          </div>
        </div>
      </FilterProvider>
      
      </div>
      
      
     


  );
};

export default Results;
