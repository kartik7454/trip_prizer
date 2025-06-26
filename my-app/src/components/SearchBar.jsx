import React, { useState } from 'react';
import AirportSelect from './airportSelect';
import PassangersAndClass from './passangersAndClass';
import './SearchBar.css';
import { FaExchangeAlt } from 'react-icons/fa';

const SearchBar = () => {
  const [tripType, setTripType] = useState('One Way');
  
  const [fareType, setFareType] = useState("Senior");
  const fareOptions = ["Regular", "Armed Forces", "Student", "Senior"];
  return (<div className='main_container'>
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-field trip-type">
          <label>TRIP TYPE</label>
          <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
            <option>One Way</option>
            <option>Round Trip</option>
            <option>Multi-city</option>
          </select>
        </div>
        <div className="search-field">
          <label>FROM</label>
          <AirportSelect />
        </div>
        
       

        <div className="search-field">
          <label>TO</label>
          <AirportSelect />
        </div>
        <div className="search-field">
          <label>DEPARTURE</label>
          <input type="date" />
        </div>
        <div className="search-field">
          <label>RETURN</label>
          {tripType === 'Round Trip' ? (
            <input type="date" />
          ) : (
            <div className="add-return" onClick={() => setTripType('Round Trip')}>Add Return</div>
          )}
        </div>
        <div className="search-field">
          <label>TRAVELLERS & CLASS</label>
          <PassangersAndClass />
        </div>
        <button className="search-button2">SEARCH</button>
      </div>
    
    </div>
    <div>
    <div className="fare-type-row">
      <label className="fare-type-label" style={{ color: "white" }}>Fare Type</label>
      <div className="fare-type-options">
        {fareOptions.map((option) => (
	
              <div
	
	             key={option}
	               className={`fare-type-box${fareType === option ? " selected" : ""}`}
	               style={{ height: "40px" }}
	               onClick={() => setFareType(option)}
                >
	                 <div className={`fare-type-title${fareType === option ? " selected" : ""}`}>
	
                   {option}
	
	               {fareType === option && (
	
	             <span className="checkmark">&#10003;</span>
	
              )}
	
	             </div>
	
              <div className="fare-type-subtitle">Fares</div>
	
	             </div>
	
	               ))}
	
               </div>
	
               </div>
    </div>
    </div>
    
  );
};

export default SearchBar; 