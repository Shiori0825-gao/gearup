import React from "react";
import "./SearchPage.css";
import mapImage from "./images/map-placeholder.png";
import gmcImage from "./images/gmc.jpg";
import porscheImage from "./images/porsche.jpg";
import mercedesImage from "./images/mercedes.jpg";
import logoImage from "./images/logo.png";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";

function SearchPage() {
  return (
    <div className="search-container">
      {/* HEADER BAR */}
      <header className="header">
        <img src={logoImage} alt="Logo" className="logo-img" />
        <div className="search-bar">
          <input type="text" placeholder="Pick-up Location" />
          <div className="input-icon"><FaMapMarkerAlt /></div>

          <input type="date" />
          <div className="input-icon"><FaCalendarAlt /></div>

          <input type="time" />
          <div className="input-icon"><FaClock /></div>

          <input type="date" />
          <div className="input-icon"><FaCalendarAlt /></div>

          <input type="time" />
          <div className="input-icon"><FaClock /></div>

          <button className="search-btn">
            <FaSearch /> Search
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="main-layout">
        {/* LEFT SIDEBAR */}
        <aside className="sidebar">
          <div className="map-box">
            <img
              src={mapImage}
              alt="Map"
              className="map-img"
              onClick={() =>
                window.open("https://maps.app.goo.gl/pPNL62ZpA6yk8A1p6", "_blank")
              }
            />
            <div className="map-overlay">
              <FaMapMarkerAlt size={25} color="white" />
              <button
                className="map-btn"
                onClick={() =>
                  window.open("https://maps.app.goo.gl/pPNL62ZpA6yk8A1p6", "_blank")
                }
              >
                Open Maps
              </button>
            </div>
          </div>

          <div className="filters">
            <div className="filter-header">
              <h3>Filters</h3>
              <a href="#">Clear all filters</a>
            </div>

            <div className="filter-group">
              <h4>Location</h4>
              <label><input type="checkbox" /> Auckland</label><br />
              <label><input type="checkbox" /> Queens Town</label>
            </div>

            <div className="filter-group">
              <h4>Transmission</h4>
              <label><input type="checkbox" /> Automatic</label><br />
              <label><input type="checkbox" /> Manual</label>
            </div>

            <div className="filter-group">
              <h4>Price</h4>
              <label><input type="checkbox" /> $0 - $500</label><br />
              <label><input type="checkbox" /> $500+</label>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="results">
          <h2>Vehicles Available</h2>

          <div className="sort-bar">
            <button>Sort By Vehicle Type</button>
            <button className="active">Automatic Transmission</button>
          </div>

          <div className="car-card">
            <img src={gmcImage} alt="GMC Denali" />
            <div className="car-info">
              <h3>GMC Denali 2025</h3>
              <p>5 Seats • Automatic • 3 Bags</p>
              <div className="price">
                <h4>NZD 140/day</h4>
                <button>Book Now</button>
              </div>
            </div>
          </div>

          <div className="car-card">
            <img src={porscheImage} alt="Porsche Taycan" />
            <div className="car-info">
              <h3>Porsche Taycan 2025</h3>
              <p>5 Seats • Automatic • 3 Bags</p>
              <div className="price">
                <h4>NZD 190/day</h4>
                <button>Book Now</button>
              </div>
            </div>
          </div>

          <div className="car-card">
            <img src={mercedesImage} alt="Mercedes AMG GTR" />
            <div className="car-info">
              <h3>Mercedes AMG GTR 2025</h3>
              <p>4 Seats • Automatic • 3 Bags</p>
              <div className="price">
                <h4>NZD 300/day</h4>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SearchPage;
