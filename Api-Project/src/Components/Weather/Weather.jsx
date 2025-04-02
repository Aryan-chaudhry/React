import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);
  const LAT = 29.6857; // Latitude for Karnal
  const LON = 76.9905; // Longitude for Karnal

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,cloudcover,visibility,pressure_msl&daily=sunrise,sunset&timezone=auto`
      );
      const data = await response.json();

      if (!data.current || !data.daily) {
        console.error("Invalid API response:", data);
        return;
      }

      const currentTime = new Date();
      const sunriseTime = new Date(data.daily.sunrise[0]); // Get today's sunrise
      const sunsetTime = new Date(data.daily.sunset[0]); // Get today's sunset
      const isNight = currentTime < sunriseTime || currentTime > sunsetTime;

      const newWeather = {
        city: "Karnal",
        country: "India",
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        windSpeed: data.current.wind_speed_10m,
        cloudCover: data.current.cloudcover,
        visibility: data.current.visibility,
        pressure: data.current.pressure_msl,
        time: currentTime.toLocaleTimeString(),
        isNight: isNight,
      };

      setWeather(newWeather);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  if (!weather) {
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white text-4xl font-bold animate-pulse">
        Loading Weather...
      </div>
    );
  }

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-black text-white p-8 relative ${
        weather.cloudCover > 50 ? "animate-clouds" : "animate-sun"
      }`}
    >
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-4xl border border-white/20">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-extrabold text-white drop-shadow-lg">
            🌍 Karnal Weather
          </h2>
          <div className="text-6xl drop-shadow-lg">
            {weather.isNight ? "🌙" : "☀️"}
          </div>
        </div>
        <div className="text-6xl font-bold text-blue-400 mt-4 drop-shadow-lg">
          {weather.temperature}°C
        </div>
        <p className="text-xl text-gray-300 italic">
          {weather.cloudCover > 50 ? "Cloudy" : "Clear"}
        </p>
        <div className="grid grid-cols-2 gap-6 text-lg font-medium text-gray-300 mt-6">
          <div className="text-2xl">
            💨 Wind: <span className="text-white">{weather.windSpeed} m/s</span>
          </div>
          <div className="text-2xl">
            🌫 Humidity: <span className="text-white">{weather.humidity}%</span>
          </div>
          <div className="text-2xl">
            🌍 Pressure: <span className="text-white">{weather.pressure} hPa</span>
          </div>
          <div className="text-2xl">
            ☁ Cloud Cover: <span className="text-white">{weather.cloudCover}%</span>
          </div>
          <div className="text-2xl">
            👀 Visibility:{" "}
            <span className="text-white">{weather.visibility / 1000} km</span>
          </div>
          <div className="text-2xl">
            🕒 Time: <span className="text-white">{weather.time}</span>
          </div>
        </div>
        <div className="mt-6 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}

export default Weather;
