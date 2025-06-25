import React, { useState } from 'react';
import AirportSelect from './airportSelect';
import PassangersAndClass from './passangersAndClass';
import './SearchBar.css';
import { FaExchangeAlt } from 'react-icons/fa';

const SearchBar = () => {
  const [tripType, setTripType] = useState('One Way');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  return (
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
  );
};

export default SearchBar; 