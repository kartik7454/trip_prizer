import React from "react";
import { useState,useEffect,useContext } from "react";
import { TripContext } from "../context/tripcontext";
import { format } from "date-fns";
import AirportSelect from "./airportSelect";
import PassangersAndClass from "./passangersAndClass";

const Roundtrip = () => {
    const [fareType, setFareType] = useState("Senior");
    const {trip,setTrip} = useContext(TripContext);
    const [departureDate, setDepartureDate] = useState(() => {
      const today = new Date();
      return today.toISOString().split('T')[0];
    });
    const [returnDate, setReturnDate] = useState(() => {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().split('T')[0];
    });

    const fareOptions = ["Regular", "Armed Forces", "Student", "Senior"];
    return (
      <div className="flight-search-container">
        
        {/* Tabs */}
        <div className="tabs">
          <button className="tab "onClick={()=>setTrip("oneway")}>One Way</button>
          <button className="tab active " >Round Trip</button>
          <button className="tab"onClick={()=>setTrip("multiCity")}>Multi City</button>
        </div>
  
        {/* Flight Details with vertical dividers */}
        <div className="flight-details">
          {/* Each detail is a flex item */}
          <div className="detail-box">
            <label>To</label>
            <AirportSelect />
          </div>

          <div className="divider" />

          <div className="detail-box">
            <label>From</label>
            <AirportSelect />
          </div>
  
          <div className="divider" />
  
          <div className="detail-box">
            <label>Departure</label>
            <input
              type="date"
              className="main-text"
              value={departureDate}
              onChange={e => setDepartureDate(e.target.value)}
              style={{ width: '100%' }}
            />
            <div className="sub-text">
              {format(new Date(departureDate), "EEEE")}
            </div>
          </div>
  
          <div className="divider" />
  
          <div className="detail-box">
            <label>Return</label>
            <input
              type="date"
              className="main-text"
              value={returnDate}
              onChange={e => setReturnDate(e.target.value)}
              style={{ width: '100%' }}
            />
            <div className="sub-text">
              {format(new Date(returnDate), "EEEE")}
            </div>
          </div>
  
          <div className="divider" />
  
          <div className="detail-box">
            <PassangersAndClass />
          </div>
        </div>
  
        {/* Fare Type */}
        <div className="fare-type-row">
          <label className="fare-type-label">Fare Type</label>
          <div className="fare-type-options">
            {fareOptions.map((option) => (
              <div
                key={option}
                className={`fare-type-box${fareType === option ? " selected" : ""}`}
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
  
        {/* Search Button */}
        <div className="search-button-container">
          <button className="search-button">SEARCH</button>
        </div>
      </div>
    );
};

export default Roundtrip;
