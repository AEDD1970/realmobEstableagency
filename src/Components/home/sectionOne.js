import React from "react";
import "../../style/sectionOne.css";
import "../../style/banner.css";

const SectionOne = () => {
  return (
    <section className="homeContetnSectionOne">
      
       
          <div className="containerSearch">
            <div className="container-filter">
              <button type="button">Sell</button>
              <button type="button">Buy</button>
              <button type="button">Rent</button>
            </div>

            <div className="container-bar-searching">
              <input
                type="text"
                name="search"
                placeholder="Enter keyword here ..."
              />

              <select>
                <option defaultValue>Select Location</option>
                <option>Colombia</option>
                <option>Venezuela</option>
                <option>EE.UU</option>
                <option>CUBA</option>
                <option>CHILE</option>
                <option>HAITI</option>
                <option>TRINIDAD Y TOBAGO</option>
                <option>PERÙ</option>
              </select>

              <div className="container-btn-search">
                <button type="submit">Search</button>
              </div>
            </div>
         
        </div>
     
    </section>
  );
};

export default SectionOne;
