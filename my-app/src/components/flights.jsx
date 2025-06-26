import React from "react";
import './flights.css';

const Flights = () => {

    const flights = [
        {
            "airline": "Air India Express",
            "flight_numbers": ["IX 1130"],
            "departure_time": "22:15",
            "departure_city": "New Delhi",
            "duration": "05h 15m",
            "arrival_time": "03:30 ",
            "arrival_city": "Bengaluru",
            "price_per_adult": 5815,
            "currency": "INR",
        },
        {
            "airline": "IndiGo",
            "flight_numbers": ["6E 203"],
            "departure_time": "06:00",
            "departure_city": "New Delhi",
            "duration": "02h 45m",
            "arrival_time": "08:45",
            "arrival_city": "Bengaluru",
            "price_per_adult": 6200,
            "currency": "INR",
        },
        {
            "airline": "Vistara",
            "flight_numbers": ["UK 811"],
            "departure_time": "14:30",
            "departure_city": "New Delhi",
            "duration": "02h 50m",
            "arrival_time": "17:20",
            "arrival_city": "Bengaluru",
            "price_per_adult": 7000,
            "currency": "INR",
        },
        {
            "airline": "SpiceJet",
            "flight_numbers": ["SG 819"],
            "departure_time": "18:10",
            "departure_city": "New Delhi",
            "duration": "02h 55m",
            "arrival_time": "21:05",
            "arrival_city": "Bengaluru",
            "price_per_adult": 5600,
            "currency": "INR",
        },
        {
            "airline": "Go First",
            "flight_numbers": ["G8 115"],
            "departure_time": "09:20",
            "departure_city": "New Delhi",
            "duration": "02h 40m",
            "arrival_time": "12:00",
            "arrival_city": "Bengaluru",
            "price_per_adult": 5900,
            "currency": "INR",
        }
    ]

    const datePrices = [
        { date: "Thu, Jun 26", price: 6514 },
        { date: "Fri, Jun 27", price: 5815 },
        { date: "Sat, Jun 28", price: 5815, selected: true },
        { date: "Sun, Jun 29", price: 6514 },
        { date: "Mon, Jun 30", price: 5815 },
        { date: "Tue, Jul 1", price: 4894, low: true },
        { date: "Wed, Jul 2", price: 4894, low: true },
        { date: "Thu, Jul 3", price: 4619, low: true },
        { date: "Mon, Jun 30", price: 5815 },
        { date: "Tue, Jul 1", price: 4894, low: true },
        { date: "Wed, Jul 2", price: 4894, low: true },
        { date: "Thu, Jul 3", price: 4619, low: true }
    ];

  return (
    <div className="flights-container">
      <h2>Flights from New Delhi to Bengaluru</h2>
      
      {/* Date/Price Selector */}
      <div className="date-price-selector">
        {datePrices.map((item, idx) => (
          <div
            key={idx}
            className={`date-price-item${item.selected ? ' selected' : ''}${item.low ? ' low' : ''}`}
          >
            <div className="date">{item.date}</div>
            <div className="price">₹ {item.price.toLocaleString()}</div>
          </div>
        ))}
      </div>
      {/* End Date/Price Selector */}

      <div className="flights-list">
        {flights.map((flight, idx) => (
          <div className="flight-card" key={idx}>
            <div className="flight-header">
              <div className="airline-logo-placeholder" />
              <div className="airline-details">
                <div className="airline-name">{flight.airline}</div>
                <div className="flight-number">{flight.flight_numbers}</div>
              </div>
             
            </div>
            <div className="flight-info-row">
              <div className="flight-time">
                <div className="time">{flight.departure_time}</div>
                <div className="city">{flight.departure_city}</div>
              </div>
              <div className="flight-duration">
                <div className="duration">{flight.duration}</div>
                <div className="non-stop">Non stop</div>
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
