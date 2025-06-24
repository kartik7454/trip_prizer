import { useState, useEffect, useContext } from "react";
import Oneway from "./oneway";
import Roundtrip from "./roundtrip";
import Multicity from "./multicity";
import { TripContext } from "../context/tripcontext";
const TripSelector = () => {
  const {trip,setTrip} = useContext(TripContext);
  const [tripType, setTripType] = useState(trip);

  useEffect(() => {
    setTripType(trip);
  }, [trip]);

  return (
    <div>

     {tripType === "oneway" && <Oneway/>}
     {tripType === "roundTrip" && <Roundtrip/>}
     {tripType === "multiCity" && <Multicity/>}
    </div>
  );
};

export default TripSelector;

