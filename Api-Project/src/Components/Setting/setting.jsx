import React, { useState } from "react";
import { useLocation } from "../../Context/LocationContext";
import { useNavigate } from "react-router-dom";

function Setting() {
  const { setLocation } = useLocation();
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const query = `${formData.city}, ${formData.state}, ${formData.country}`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setLocation({
          city: formData.city,
          state: formData.state,
          country: formData.country,
          lat: parseFloat(lat),
          lon: parseFloat(lon),
        });
        navigate("/");
      } else {
        setError("❌ Location not found. Try again.");
      }
    } catch (err) {
      console.error(err);
      setError("⚠️ Error fetching location.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🌌 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-black to-purple-900 animate-pulse-slow z-0" />

      {/* ✨ Star particles */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0" />

      {/* 🌟 Form container */}
      <div className="relative z-10 flex justify-center items-center h-full px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6 text-white"
        >
          <h2 className="text-3xl font-extrabold text-center text-blue-200 drop-shadow">
            🌍 Set Your Location
          </h2>

          {["city", "state", "country"].map((field) => (
            <div key={field} className="relative">
              <input
                type="text"
                name={field}
                id={field}
                placeholder=" "
                value={formData[field]}
                onChange={handleChange}
                required
                className="peer w-full p-3 rounded-lg border border-gray-500 bg-white/10 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20"
              />
              <label
                htmlFor={field}
                className="absolute left-3 top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-300"
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
            </div>
          ))}

          {error && (
            <p className="text-red-400 text-center text-sm bg-white/10 border border-red-500/20 rounded p-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              loading
                ? "bg-blue-400 cursor-wait"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 cursor-pointer"
            }`}
          >
            {loading ? "Finding Location..." : "Save Location"}
          </button>
        </form>
      </div>

      {/* ⬇️ Custom slow pulse animation */}
      <style>
        {`
          @keyframes pulseSlow {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-pulse-slow {
            animation: pulseSlow 15s ease infinite;
            background-size: 400% 400%;
          }
        `}
      </style>
    </div>
  );
}

export default Setting;
