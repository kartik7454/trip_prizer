import React from "react";
import { useState, useContext } from "react";
import { TripContext } from "../context/tripcontext";
import { format } from "date-fns";
import AirportSelect from "./airportSelect";
import PassangersAndClass from "./passangersAndClass";

const airportOptions = [
  { value: "BOM", label: "Mumbai (BOM, Chhatrapati Shivaji International)" },
  { value: "DEL", label: "Delhi (DEL, Indira Gandhi International)" },
  { value: "BLR", label: "Bangalore (BLR, Kempegowda International)" },
  { value: "MAA", label: "Chennai (MAA, Chennai International)" },
];

const Multicity = () => {
  const [fareType, setFareType] = useState("Senior");
  const fareOptions = ["Regular", "Armed Forces", "Student", "Senior"];
  const { trip, setTrip } = useContext(TripContext);
  // Each leg: { from, to, departureDate }
//instead of city count we use  this 
  const [legs, setLegs] = useState([
    { from: "", to: "", departureDate: "" },
    { from: "", to: "", departureDate: "" },
  ]);

//adds a city 

  const addCity = () => {
    setLegs(legs => [
      ...legs,
      { from: "", to: "", departureDate: "" },
    ]);
  };

  return (
    <div className="flight-search-container">
      {/* Tabs */}
      <div className="tabs">
        <button className="tab " onClick={() => setTrip("oneway")}>One Way</button>
        <button className="tab  " onClick={() => setTrip("roundTrip")}>Round Trip</button>
        <button className="tab active ">Multi City</button>
      </div>

      {legs.map((leg, idx) => (
        <div className="flight-details" key={idx}>
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
              value={leg.departureDate}
              
              style={{ width: '100%' }}
            />
            <div className="sub-text">
              {leg.departureDate ? format(new Date(leg.departureDate), "EEEE") : ""}
            </div>
          </div>

          <div className="divider" />

          <div className="detail-box">
            <PassangersAndClass />
          </div>
          {/* Delete button only for the last leg and if more than 2 legs */}
          {legs.length > 2 && idx === legs.length - 1 && (
            <button
              className="delete-city-btn"
              style={{ marginLeft: '16px', backgroundColor: '#e53935', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}
              onClick={() => setLegs(legs => legs.slice(0, -1))}
              title="Remove this city"
            >
              &#x2715;
            </button>
          )}
        </div>
      ))}

      <div style={{ display: "flex", justifyContent: "flex-end", margin: "16px 0" }}>
        <button
          className="add-city-btn"
          onMouseOver={e => (e.currentTarget.style.backgroundColor = "#1565c0")}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = "#1976d2")}
          onClick={addCity}
        >
          +
        </button>
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

export default Multicity;
