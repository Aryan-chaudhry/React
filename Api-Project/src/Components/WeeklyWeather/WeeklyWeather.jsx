import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useLocation } from "../../context/LocationContext";

function WeeklyWeather() {
  const [forecast, setForecast] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);
  const [currentHour, setCurrentHour] = useState(new Date().getHours());
  const [currentMinute, setCurrentMinute] = useState(new Date().getMinutes());
  const scrollRef = useRef(null);
  const { location } = useLocation();
  const LAT = location.lat;
  const LON = location.lon;
  const CITY = location.city;
  const STATE = location.state;
  const COUNTRY = location.country;

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,cloudcover_mean&hourly=temperature_2m,precipitation&timezone=auto`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.daily && data.hourly) {
          const dailyForecast = data.daily.time.map((date, index) => ({
            date: new Date(date).toLocaleDateString(undefined, {
              weekday: "long",
              day: "numeric",
              month: "short",
            }),
            tempMax: data.daily.temperature_2m_max[index],
            tempMin: data.daily.temperature_2m_min[index],
            rain: data.daily.precipitation_sum[index],
            clouds: data.daily.cloudcover_mean[index],
            hourlyData: Array.from({ length: 24 }, (_, hourIndex) => ({
              time: `${hourIndex % 12 || 12} ${hourIndex < 12 ? "AM" : "PM"}`,
              temp: data.hourly.temperature_2m[hourIndex + index * 24],
              rain: data.hourly.precipitation[hourIndex + index * 24],
              icon: `https://openweathermap.org/img/wn/${
                data.hourly.precipitation[hourIndex + index * 24] > 0 ? "09d" : "01d"
              }@2x.png`,
            })),
          }));
          setForecast(dailyForecast);
        } else {
          console.error("Invalid API response:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setCurrentMinute(now.getMinutes());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (expandedDay !== null && scrollRef.current) {
      const currentTimePos = ((currentHour * 60 + currentMinute) / 1440) * scrollRef.current.scrollWidth;
      scrollRef.current.scrollTo({ left: currentTimePos - 100, behavior: "smooth" });
    }
  }, [expandedDay]);

  if (!forecast) {
    return (
      <div className="h-screen flex justify-center items-center bg-gray-900 text-white text-3xl">
        Loading Weather...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">5-Day Weather Forecast</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-4">
          <thead className="w-full bg-gray-700">
            <tr className="text-white text-left">
              <th className="px-6 py-3 text-lg text-center">📅 Date</th>
              <th className="px-6 py-3 text-lg">🌡 Max Temp</th>
              <th className="px-6 py-3 text-lg">🌡 Min Temp</th>
              <th className="px-6 py-3 text-lg">🌧 Rain</th>
              <th className="px-6 py-3 text-lg">⛅ Cloudiness</th>
            </tr>
          </thead>
          <tbody>
            {forecast.map((day, index) => (
              <React.Fragment key={index}>
                <tr
                  className="bg-gray-800 text-white cursor-pointer hover:bg-gray-700 transition duration-300"
                  onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                >
                  <td className="px-6 py-4 text-center rounded-l-xl text-lg">{day.date}</td>
                  <td className="px-6 py-4 text-center text-blue-400 text-lg">{day.tempMax}°C</td>
                  <td className="px-6 py-4 text-center text-blue-400 text-lg">{day.tempMin}°C</td>
                  <td className="px-6 py-4 text-center text-lg">
                    <span className="text-3xl">{day.rain > 0 ? "🌧" : "🌧️"}</span>
                    {day.rain > 0 ? ` ${day.rain} mm` : " 0%"}
                  </td>
                  <td className="px-6 py-4 text-center rounded-r-xl text-lg">
                    <span className="text-3xl">{day.clouds > 60 ? "⛅" : "🌤️"}</span>
                    {day.clouds > 10 ? `${day.clouds}%` : " Clear"}
                  </td>
                </tr>
                {expandedDay === index && (
                  <tr>
                    <td colSpan="5" className="bg-gray-700 p-4">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-x-auto whitespace-nowrap max-w-full relative p-2"
                        ref={scrollRef}
                      >
                        <div className="relative flex space-x-4">
                          {day.hourlyData.map((hour, i) => (
                            <div key={i} className="inline-block text-center">
                              <div className="text-xs text-gray-300">{hour.time}</div>
                              <img src={hour.icon} alt="weather" className="w-8 h-8 mx-auto" />
                              <div className="text-blue-300">{hour.temp}°C</div>
                              <div className="text-blue-500">
                                {hour.rain > 0 ? `🌧 ${hour.rain} mm` : "🌧️ 0 mm"}
                              </div>
                            </div>
                          ))}
                          <div
                            className="absolute top-0 bottom-0 w-[2px] bg-yellow-400"
                            style={{ left: `${(currentHour / 24) * 100}%` }}
                          >
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm">
                              {`${currentHour % 12 || 12}:${currentMinute < 10 ? "0" : ""}${currentMinute} ${currentHour < 12 ? "AM" : "PM"}`}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeeklyWeather;
