import React from "react";
import './flights.css';
import { FilterContext } from "../context/sideBarContext";
import { useState, useContext } from "react";
import flights_data from "../flights_data";


const Flights = () => {
  const { Filter, setFilter } = useContext(FilterContext); 
 
  const datePrices = [
  // Generate an array of dates from today to 7 days ahead, formatted as "Sat, Jun 28"
  (() => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      // Format: "Sat, Jun 28"
      const options = { weekday: 'short', month: 'short', day: 'numeric' };
      const formatted = d.toLocaleDateString('en-US', options).replace(',', '');
      // Insert comma after weekday for consistency
      const [weekday, month, day] = formatted.split(' ');
      days.push({
        display: `${weekday}, ${month} ${day}`,
       
      });
    }
    return days;
  })()
  ];

  // convert flight time from hr to min 
  const timeToMinutes = (timeStr) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    return hour * 60 + minute;
    
  };

  // Define time ranges in minutes from the filter 
  // i could have had this in the data itself 
  const timeRanges = {
    earlyMorning: { start: 0, end: 360 }, 
    morning: { start: 360, end: 720 },    
    afternoon: { start: 720, end: 1080 }, 
    evening: { start: 1080, end: 1440 },  
  };

  

  let filtered_flights = flights_data.filter((item) => {
    
    let depTimeMatch = true;
    let arvTimeMatch = true;
    let price_range  = true;
    
    if (Filter.departure_time && timeRanges[Filter.departure_time]) {
      const depMinutes = timeToMinutes(item.departure_time);//convert time to minutes 
      const { start, end } = timeRanges[Filter.departure_time];//get time range  
      depTimeMatch = depMinutes >= start && depMinutes < end;//filter based on time range
    }
    if (Filter.arrival_time && timeRanges[Filter.arrival_time]) {
      const arvMinutes = timeToMinutes(item.arrival_time);//convert time to minutes 
      const { start, end } = timeRanges[Filter.arrival_time];//get time range from arrival time 
      arvTimeMatch = arvMinutes >= start && arvMinutes <= end;//filter based on time range
    }

    // Price range filter
    if (Filter.max_price_per_adult > 0) { // Check if a price filter is set
      price_range = item.price_per_adult >= Filter.min_price_per_adult && item.price_per_adult <= Filter.max_price_per_adult; // Correct range check
    }
    return (
      (Filter.stops === "" || item.stops === Filter.stops) &&
      (Filter.airline === "" || item.airline === Filter.airline)&& 
      (Filter.date === "" || Filter.date == item.date)&&
      depTimeMatch&&
      arvTimeMatch &&
      price_range
      // set to true if no filter if filter then gives filtered items
    );
  })
  ;

  return (
    <div className="flights-container">
      <h2>Flights from New Delhi to Bengaluru</h2>
      
      {/* Date/Price Selector */}
      <div className="date-price-selector">
        {datePrices[0].map((item, idx) => (
          <div
          onClick={()=>{setFilter({...Filter ,date:item.display})}}
            key={idx}
            className={
              `date-price-item${Filter.date === item.display ? ' selected' : ''}${item.low ? ' low' : '' }`}
          >
            <div className="date">{item.display}</div>
            
          </div>
        ))}
      </div>
      {/* End Date/Price Selector */}

      <div className="flights-list">
        {filtered_flights.map((flight, idx) => (
          <div className="flight-card" key={idx}>
            <div className="flight-header">
              <div className="airline-logo-placeholder" />
              <div className="airline-details">
                <div className="airline-name">{flight.airline}</div>
                <div className="flight-number">{flight.flight_numbers}</div>
                <div className="flight-date">{flight.date}</div>
              </div>
            </div>
            <div className="flight-info-row">
              <div className="flight-time">
                <div className="time">{flight.departure_time}</div>
                <div className="city">{flight.departure_city}</div>
              </div>
              <div className="flight-duration">
                <div className="duration">{flight.duration}</div>
                <div className="non-stop">{flight.stops}</div>
              </div>
              <div className="flight-time">
                <div className="time">{flight.arrival_time}</div>
                <div className="city">{flight.arrival_city}</div>
              </div>
              <div className="flight-price">
                <div className="price">₹ {flight.price_per_adult.toLocaleString()}</div>
                <div className="per-adult">per adult</div>
                <button className="view-prices-btn">VIEW PRICES</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;
