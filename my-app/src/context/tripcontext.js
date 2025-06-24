import { createContext } from "react";
import React, { useState } from "react";

 const TripContext = createContext();

const TripProvider = ({ children }) => {
    const [trip, setTrip] = useState("oneway");
  
    return (
      <TripContext.Provider value={{ trip, setTrip }}>
        {children}
      </TripContext.Provider>
    );
  };
  
  export {TripProvider,TripContext};