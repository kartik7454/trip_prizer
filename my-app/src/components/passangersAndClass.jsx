import React, { useState } from "react";
import "./passangersAndClass.css";
import TravellerSelector from "./travellerSelector";

const PassangersAndClass = () => {
//for viability of container
  const [isSelectorOpen, setSelectorOpen] = useState(false);
  //number and class of travelers object
  const [travellerData, setTravellerData] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    travelClass: "economy",
  });
  const MAX_ADULTS = 9
  const max_adults = [1,2,3,4,5,6,7,8,9]
  const max_children = [0,1,2,3,4,5,6]
  const max_infants = [0,1,2,3,4,5,6]
  const classOptions = ["Economy", "Premium Economy", "Business", "First"];

  const totalTravellers =
    travellerData.adults + travellerData.children + travellerData.infants;

  //alternative to the array
  /* Array(MAX_ADULTS) -Creates a new array with MAX_ADULTS empty slots. */
  /*.keys()-Returns a new Array (Iterator object) that contains the keys (indexes) for each index in the array.
For our example, this would be an iterator for 0, 1, 2, 3, 4, 5, 6, 7, 8. */
//(...)Converts the iterator into an array.
// { console.log([...Array(MAX_ADULTS).keys()])
//   // [...Array(MAX_ADULTS).keys()].map((i) => {
 
// // });
// }
  return (
    <div className="passengers-and-class-container">
      <div className="display-view" onClick={() => setSelectorOpen(!isSelectorOpen)}>
        <p className="label">Travellers and Class</p>
        <p className="total-travellers">{totalTravellers} Traveller</p>
        <p className="travel-class">{travellerData.travelClass}</p>
      </div>

      <div>
        {isSelectorOpen&& (<div className="travellercontainer">
            <p>adults  above 12 yrs</p>
            <div className="number-selector">
              {max_adults.map((item) => (
                <div
                  key={item}
                  className={`number-item ${
                    travellerData.adults === item ? "selected" : ""
                  }`}
                  onClick={() =>
                    setTravellerData({ ...travellerData, adults: item })
                  }
                >
                  {item}
                </div>
              ))}
            </div>

            <div style={{display: 'flex', columnGap: '1rem'}}>
              <div>
                <p>children 2-12 yrs</p>
                <div className="number-selector">
                  {max_children.map((item) => (
                    <div
                      key={item}
                      className={`number-item ${
                        travellerData.children === item ? "selected" : ""
                      }`}
                      onClick={() =>
                        setTravellerData({ ...travellerData, children: item })
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p>infants below 2 yrs</p>
                <div className="number-selector">
                  {max_infants.map((item) => (
                    <div
                      key={item}
                      className={`number-item ${
                        travellerData.infants === item ? "selected" : ""
                      }`}
                      onClick={() =>
                        setTravellerData({ ...travellerData, infants: item })
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p>choose travel class</p>
              <div className="number-selector">
                {classOptions.map((item) => (
                  <div
                    key={item}
                    className={`number-item ${
                      travellerData.travelClass.toLowerCase() === item.toLowerCase() ? "selected" : ""
                    }`}
                    onClick={() =>
                      setTravellerData({ ...travellerData, travelClass: item })
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          <button
            className="traveller-done-button"
            onClick={() => {
              
                setSelectorOpen(false);
              
            }}
          >
            Apply
          </button>
          </div>)}
        
      </div>

      
    </div>
  );
};

export default PassangersAndClass;
