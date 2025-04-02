import React, { useEffect, useState } from "react";
import Globe from "react-globe.gl";
import { motion } from "framer-motion";

function EarthquakeTsunamiAlert() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&limit=20&orderby=time")
      .then((response) => response.json())
      .then((data) => {
        const eventData = data.features.map((event) => {
          const rawAlert = event.properties.alert;
          const alertLevel = rawAlert ? rawAlert.toLowerCase() : "unknown";
          const alertColor = alertLevel === "red" ? "red" : alertLevel === "orange" ? "orange" : alertLevel === "yellow" ? "yellow" : "blue";
          return {
            id: event.id,
            place: event.properties.place || "Unknown Location",
            magnitude: event.properties.mag || "N/A",
            time: new Date(event.properties.time).toLocaleString(),
            type: event.properties.tsunami === 1 ? "tsunami" : "earthquake",
            depth: event.geometry.coordinates[2] || "N/A",
            lat: event.geometry.coordinates[1],
            lon: event.geometry.coordinates[0],
            alert: alertLevel !== "unknown" ? alertLevel : "No Alert",
            url: event.properties.url || "#",
            color: alertColor,
            image: event.properties.tsunami === 1 
              ? "https://cdn.pixabay.com/photo/2023/01/29/08/26/photo-7752696_1280.jpg" 
              : "https://media.npr.org/assets/img/2023/02/07/gettyimages-1463708921-b8f2a1bd09728cec7da659c02d5432eddea89db4-s1100-c50.jpg",
          };
        });
        setData(eventData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-6">
      <h2 className="text-4xl font-bold mb-6">🌍 3D Earthquake & Tsunami Alerts</h2>

      {/* Filter Dropdown */}
      <select 
        className="p-3 mb-6 rounded-md bg-gray-800 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700" 
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="earthquake">Earthquakes</option>
        <option value="tsunami">Tsunamis</option>
      </select>
<br /><br />
      {/* 3D Globe Map */}
      <div className="relative w-full h-[600px] flex justify-center items-center">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          pointsData={data.filter(event => filter === "all" || event.type === filter)}
          pointLat={(d) => d.lat}
          pointLng={(d) => d.lon}
          pointColor={(d) => d.color}
          pointRadius={(d) => Math.max(0.5, d.magnitude * 0.8)}
          pointAltitude={(d) => 0.1}
          pointLabel={(d) => `${d.place} - Mag: ${d.magnitude}`}
          onPointClick={(event) => window.open(event.url, "_blank")}
          animateIn={true}
          labelsData={data}
          labelLat={(d) => d.lat}
          labelLng={(d) => d.lon}
          labelText={(d) => d.place}
          labelSize={1.5}
          labelColor={() => "white"}
          labelDotRadius={0.4}
        />
      </div>
<br /><br />
      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
        {data.filter(event => filter === "all" || event.type === filter).length > 0 ? (
          data
            .filter(event => filter === "all" || event.type === filter)
            .map((event) => (
              <motion.div
                key={event.id}
                whileHover={{ scale: 1.05 }}
                className="relative p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:bg-gray-700"
                onClick={() => window.open(event.url, "_blank")}
              >
                <img src={event.image} alt={event.type} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="relative z-10 bg-black bg-opacity-60 p-4 rounded-lg">
                  <h3 className="text-xl font-bold">📍 {event.place}</h3>
                  <p className="text-red-400">Magnitude: {event.magnitude}</p>
                  <p className="text-gray-300">Depth: {event.depth} km</p>
                  <p className="text-yellow-400">Alert Level: {event.alert}</p>
                  <p className="text-gray-400">🕒 {event.time}</p>
                </div>
              </motion.div>
            ))
        ) : (
          <p className="text-2xl text-gray-400">No alerts available for the selected filter.</p>
        )}
      </div>
    </div>
  );
}

export default EarthquakeTsunamiAlert;
