import React,{useState,useContext, useEffect} from "react";
import "./sidebar.css";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FilterContext } from "../context/sideBarContext";
import flights_data from "../flights_data";

const Sidebar = () => {
  
  const { Filter, setFilter } = useContext(FilterContext);

  const timings = [{title:"earlyMorning",time:"6 am",emoji:"🌅"},
    {title:"morning",time:"6 am to 12 pm ",emoji:"🌞"},
    {title:"afternoon",time:"12 pm to 6 pm ",emoji:"🌤️"},
    {title:"evening",time:"after 6 pm ",emoji:"🌙"}
  ] 

  useEffect(() => {
    // Calculate max price
    let max = 0;
    let min = Number.MAX_VALUE;
    
    flights_data.forEach((item) => {
      if (item.price_per_adult > max) {
        max = item.price_per_adult;
      }
      if (item.price_per_adult < min) {
        min = item.price_per_adult;
      }
    });
    
    setFilter(prev => ({
      ...prev,
      max_price_per_adult: max,
      min_price_per_adult: min
    }));
  }, []);

  return (
    <div className="">
      <div>
            <h3> filters</h3>
      </div>
      
      
      <div>
        <h3>one way price</h3>
        <Box sx={{ width: 200, marginLeft: 2 }}>
            <Slider
            //starting value and changes on onchange
                value={[
                    Number(Filter.min_price_per_adult) || 0,
                    Number(Filter.max_price_per_adult) || 0
                ]}
                //sets the nim and max value allowed 
                min={Math.min(...flights_data.map(f => f.price_per_adult))}//takes the price from object spread it and find min from them 
                max={Math.max(...flights_data.map(f => f.price_per_adult))}
                onChange={(event, newValue) => {
                    setFilter(prev => ({
                        ...prev,
                        min_price_per_adult: newValue[0],
                        max_price_per_adult: newValue[1]
                    }));
                    console.log(Filter)
                }}
                valueLabelDisplay="auto"
            />
            <div className="slider-labels">
                <span>{"₹"+Filter.min_price_per_adult}</span>
                <span>{"₹"+Filter.max_price_per_adult}</span>
            </div>
        </Box>
      </div>
      <div>
      <div>
        <h3>Stops From New Delhi</h3>
        <div className="filter-option">
          <input
            type="checkbox"
            id="stops-non-stop"
            value="Non-stop"
            checked={Filter.stops === "Non-stop"}// so only selected one will be checked
            onChange={(e) => {
              setFilter({
                ...Filter,
                stops: e.target.checked ? e.target.value : "",//toggle values
              });
            }}
          />
          <label htmlFor="stops-non-stop">Non Stop</label>
          <span className="filter-price">₹ 6,779</span>
        </div>
        <div className="filter-option">
          <input
            type="checkbox"
            id="stops-1-stop"
            value="One-stop"
            checked={Filter.stops === "One-stop"}
            onChange={(e) => {
              setFilter({
                ...Filter,
                stops: e.target.checked ? e.target.value : "",
              });
            }}
          />
          <label htmlFor="stops-1-stop">1 Stop</label>
          <span className="filter-price">₹ 5,815</span>
        </div>
      </div>
      <div>
        {/* Time Filters */}
        <div className="time-filter-section">
          <h3>Departure From New Delhi</h3>
          <div className="time-filter-row">
          {timings.map((item)=>{return(<div className="time-filter-btn"
          value={item.title}
          onClick={()=>{
            setFilter({
              ...Filter,
              departure_time: item.title,
            })
            
          }}>
              <span role="img" >{item.emoji}</span>
              <div>{item.time}</div>
            </div>)}
            )}
          </div>
        </div>
        <div className="time-filter-section">
          <h3>Arrival at Bengaluru</h3>
          <div className="time-filter-row">
          {timings.map((item)=>{return(<div className="time-filter-btn"
          value={item.title}
          onClick={()=>{
            setFilter({
              ...Filter,
              arrival_time: item.title,
            })
            
          }}>
              <span role="img" >{item.emoji}</span>
              <div>{item.time}</div>
            </div>)}
            )}
          </div>
        </div>
        <div>
            <h3>Airlines</h3>
        <div>
            <div className="filter-option">
                <input type="checkbox" id="air-india"
                value="air-india"
                checked={Filter.airline === "air-india"}
                onChange={(e) => {
                  setFilter({
                    ...Filter,
                   airline: e.target.checked ? e.target.value : "",
                  });
                }}
                 />
                <label htmlFor="air-india">air india</label>
                <span className="filter-price">₹ 6,779</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="spice-jet"
                value="spice-jet"
                checked={Filter.airline === "spice-jet"}
                onChange={(e) => {
                  setFilter({
                    ...Filter,
                   airline: e.target.checked ? e.target.value : "",
                  });
                }}
                />
                <label htmlFor="spice-jet">spice-jet</label>
                <span className="filter-price">₹ 5,815</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="indigo"
                value="indigo"
                checked={Filter.airline === "indigo"}
                onChange={(e) => {
                  setFilter({
                    ...Filter,
                   airline: e.target.checked ? e.target.value : "",
                  });
                }}
                />
                <label htmlFor="indigo">IndiGo</label>
                <span className="filter-price">₹ 6,200</span>
            </div>
            <div className="filter-option">
                <input type="checkbox" id="kingfisher"
                value="kingfisher"
                checked={Filter.airline === "kingfisher"}
                onChange={(e) => {
                  setFilter({
                    ...Filter,
                   airline: e.target.checked ? e.target.value : "",
                  });
                }}
                />
                <label htmlFor="kingfisher">kingfisher</label>
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

