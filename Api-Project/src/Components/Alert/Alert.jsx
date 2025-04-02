import React, { useState } from "react";

function Alert() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({ city: "Karnal", state: "Haryana", country: "India" });
  const [coordinates, setCoordinates] = useState({ lat: 29.6857, lon: 76.9905 });
  const [zoom, setZoom] = useState(-5);

  const updateLocation = () => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location.city},${location.state},${location.country}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCoordinates({ lat: data[0].lat, lon: data[0].lon });
        }
      })
      .catch((error) => console.error("Error fetching coordinates:", error));
  };

  return (
    <div className="h-screen flex bg-gradient-to-r from-gray-800 to-black text-white p-6 relative overflow-hidden">
      {/* Left Side - Radar Map */}
      <div className="flex-[1.5] rounded-lg overflow-hidden shadow-md border-2 border-gray-600" style={{ height: "calc(100% - 60px)" }}>
        <iframe
          src={`https://embed.windy.com/embed2.html?lat=${coordinates.lat}&lon=${coordinates.lon}&zoom=${zoom}&level=surface&overlay=radar&menu=&message=&marker=true&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=${coordinates.lat}&detailLon=${coordinates.lon}&metricWind=default&metricTemp=default&radarRange=-1`}
          className="w-full h-full"
          title="Live Radar"
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Right Side - Weather Info Sidebar */}
      <div className="w-96 bg-black/50 p-6 rounded-xl shadow-lg ml-6 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-center">See Weather Report from Radar</h3>
        
        {/* Location Input */}
        <div className="mt-6 text-center">
          <input
            type="text"
            placeholder="City"
            value={location.city}
            onChange={(e) => setLocation({ ...location, city: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white w-full mb-2"
          />
          <input
            type="text"
            placeholder="State"
            value={location.state}
            onChange={(e) => setLocation({ ...location, state: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white w-full mb-2"
          />
          <input
            type="text"
            placeholder="Country"
            value={location.country}
            onChange={(e) => setLocation({ ...location, country: e.target.value })}
            className="p-2 rounded bg-gray-700 text-white w-full mb-2"
          />
          <button
            onClick={updateLocation}
            className="mt-2 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700 transition"
          >
            Update Location
          </button>
        </div>

        {/* Zoom Control */}
        <div className="mt-6 text-center">
          <label className="block text-lg font-semibold">Zoom Level: {zoom}</label>
          <input
            type="range"
            min="-10"
            max="10"
            step="1"
            value={zoom}
            onChange={(e) => setZoom(parseInt(e.target.value))}
            className="w-full mt-2"
          />
        </div>
      </div>
    </div>
  );
}

export default Alert;
