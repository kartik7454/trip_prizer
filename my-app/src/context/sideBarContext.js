import { createContext } from "react";
import React, { useState } from "react";

 const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    const [Filter, setFilter] = useState({
         airline: "",
        departure_time: "",
        arrival_time: "",
        max_price_per_adult: 0,
        min_price_per_adult:Number.MIN_VALUE,
        date: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
        stops:""
    });
  
    return (
      <FilterContext.Provider value={{ Filter, setFilter }}>
        {children}
      </FilterContext.Provider>
    );
  };
  
  export { FilterProvider, FilterContext };