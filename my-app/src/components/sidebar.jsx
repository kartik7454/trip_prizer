import React from "react";
import "./sidebar.css";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Sidebar = () => {
  return (
    <div className="">
      <div>
            <h3>applied filters</h3>
      </div>
      <div>
        popular filters
        <div>
            <div className="filter-option">
                <input type="checkbox" id="non-stop" />
                <label htmlFor="non-stop">Non Stop</label>
                <span className="filter-price">₹ 6,779</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="refundable" />
                <label htmlFor="refundable">Refundable Fares</label>
                <span className="filter-price">₹ 5,815</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="indigo" />
                <label htmlFor="indigo">IndiGo</label>
                <span className="filter-price">₹ 6,200</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="air-india" />
                <label htmlFor="air-india">Air India</label>
                <span className="filter-price">₹ 7,227</span>
            </div>
        </div>
      </div>
      
      <div>
        <h3>one way price</h3>
        <Box sx={{ width: 200, marginLeft: 2 }}>
            <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
            />
            <div className="slider-labels">
                <span>₹ 5,815</span>
                <span>₹ 10,700</span>
            </div>
        </Box>
      </div>
      <div>
      <div>
        <h3>Stops From New Delhi</h3>
        <div className="filter-option">
          <input type="checkbox" id="stops-non-stop" />
          <label htmlFor="stops-non-stop">Non Stop</label>
          <span className="filter-price">₹ 6,779</span>
        </div>
        <div className="filter-option">
          <input type="checkbox" id="stops-1-stop" />
          <label htmlFor="stops-1-stop">1 Stop</label>
          <span className="filter-price">₹ 5,815</span>
        </div>
      </div>
      <div>
        {/* Time Filters */}
        <div className="time-filter-section">
          <h3>Departure From New Delhi</h3>
          <div className="time-filter-row">
            <div className="time-filter-btn">
              <span role="img" aria-label="before 6am">🌅</span>
              <div>Before<br/>6 AM</div>
            </div>
            <div className="time-filter-btn">
              <span role="img" aria-label="6am to 12pm">🌞</span>
              <div>6 AM to<br/>12 PM</div>
            </div>
            <div className="time-filter-btn">
              <span role="img" aria-label="12pm to 6pm">🌤️</span>
              <div>12 PM to<br/>6 PM</div>
            </div>
            <div className="time-filter-btn">
              <span role="img" aria-label="after 6pm">🌙</span>
              <div>After<br/>6 PM</div>
            </div>
          </div>
        </div>
        <div className="time-filter-section">
          <h3>Arrival at Bengaluru</h3>
          <div className="time-filter-row">
            <div className="time-filter-btn">
              <span role="img" aria-label="before 6am">🌅</span>
              <div>Before<br/>6 AM</div>
            </div>
            <div className="time-filter-btn">
              <span role="img" aria-label="6am to 12pm">🌞</span>
              <div>6 AM to<br/>12 PM</div>
            </div>
            <div className="time-filter-btn">
              <span role="img" aria-label="12pm to 6pm">🌤️</span>
              <div>12 PM to<br/>6 PM</div>
            </div>
            <div className="time-filter-btn">
              <span role="img" aria-label="after 6pm">🌙</span>
              <div>After<br/>6 PM</div>
            </div>
          </div>
        </div>
        <div>
            <h3>Airlines</h3>
        <div>
            <div className="filter-option">
                <input type="checkbox" id="non-stop" />
                <label htmlFor="non-stop">air india</label>
                <span className="filter-price">₹ 6,779</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="refundable" />
                <label htmlFor="refundable">air india express</label>
                <span className="filter-price">₹ 5,815</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="indigo" />
                <label htmlFor="indigo">IndiGo</label>
                <span className="filter-price">₹ 6,200</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="air-india" />
                <label htmlFor="air-india">spice jet</label>
                <span className="filter-price">₹ 7,227</span>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;

