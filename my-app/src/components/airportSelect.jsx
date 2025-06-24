import React,{useState} from "react";
import "./airportSelect.css";

const AirportSelect = () => {
    const [visible, setVisible] = useState(false);//visibility of the airports list 
    const [searchQuery, setSearchQuery] = useState("");//for search query 
    
    //list of airports 
    const airports = [
        { city: "Mumbai", code: "BOM", airport: "Chhatrapati Shivaji International Airport" },
        { city: "Delhi", code: "DEL", airport: "Indira Gandhi International Airport" },
        { city: "Bangalore", code: "BLR", airport: "Kempegowda International Airport" },
        { city: "Chennai", code: "MAA", airport: "Chennai International Airport" },
        { city: "Kolkata", code: "CCU", airport: "Netaji Subhas Chandra Bose International Airport" },
        { city: "Hyderabad", code: "HYD", airport: "Rajiv Gandhi International Airport" },
        { city: "Ahmedabad", code: "AMD", airport: "Sardar Vallabhbhai Patel International Airport" },
        { city: "Pune", code: "PNQ", airport: "Pune Airport" },
        { city: "Goa", code: "GOI", airport: "Dabolim Airport" },
        { city: "Kochi", code: "COK", airport: "Cochin International Airport" },
        { city: "Thiruvananthapuram", code: "TRV", airport: "Trivandrum International Airport" },
        { city: "Jaipur", code: "JAI", airport: "Jaipur International Airport" },
        { city: "Lucknow", code: "LKO", airport: "Chaudhary Charan Singh International Airport" },
        { city: "Guwahati", code: "GAU", airport: "Lokpriya Gopinath Bordoloi International Airport" },
        { city: "Bhubaneswar", code: "BBI", airport: "Biju Patnaik International Airport" },
        { city: "Chandigarh", code: "IXC", airport: "Chandigarh International Airport" },
        { city: "Nagpur", code: "NAG", airport: "Dr. Babasaheb Ambedkar International Airport" },
        { city: "Patna", code: "PAT", airport: "Jay Prakash Narayan International Airport" },
        { city: "Indore", code: "IDR", airport: "Devi Ahilyabai Holkar Airport" },
        { city: "Srinagar", code: "SXR", airport: "Sheikh ul-Alam International Airport" }
    ];
    const [airport, setAirport] = useState(airports[0]);//selected airport 
    
//filters the list of airports for search based on query
    const filteredAirports = airports.filter(item => 
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.airport.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="airport-wrapper">
            <div className="airport-select" onClick={() => setVisible(!visible)}> {/* toggles the visbility of list container to true*/}
                <div className="flex-col">
                    
                    <span className="city">{airport.city}</span>
                    <div className="details">
                        
                        <span className="airport-name">{airport.airport}</span>
                        <span className="code">{airport.code}</span>
                    </div>
                </div>
            </div>
            {/*if visable true it renders the list constainer  */}
            {visible && (
                <div className="airport-list">
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search for cities or airports..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="airport-search"
                        />
                    </div>
                    {/* map and render the list after filtering it if  nothing in query it will return all*/}
                    {filteredAirports.map((item, index) => (
                        <div 
                            key={index} 
                            className="airport-item"
                            onClick={() => {
                                setAirport(item);
                                setVisible(false);
                                setSearchQuery("");
                            }}
                        >
                            <div className="airport-item-content">
                                <span className="city">{item.city}</span>
                                <div className="details">
                                   
                                    <span className="airport-name">{item.airport}</span>
                                    <span className="code">{item.code}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AirportSelect;
