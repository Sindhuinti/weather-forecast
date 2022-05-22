import axios from "axios";
import { useState } from "react";
import getCurrentDayForecast from "../helps/getCurrentDayForecast";
import getCurrentDayDetailedForecast from "../helps/getCurrentDayDetailedForecast";

function useForecast() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getData = async (location) => {
    const loc = location;
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&units=metric`;
    try {
      const req = axios.get(url);

      const res = await req;

      //console.log(res.data);
      return res.data;
    } catch (e) {
      //console.log(e);
    }
  };

  const gatherForecastData = (data, location) => {
    const currentDay = getCurrentDayForecast(data, location);
    const currentDayDetails = getCurrentDayDetailedForecast(data);
    setForecast({ currentDay, currentDayDetails });
    setLoading(false);
  };

  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);

    const data = await getData(location);
    // console.log(data);

    if (!data || data.length === 0) {
      setError("Location not found");
      setLoading(false);
      return {};
    }
    gatherForecastData(data, location);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitRequest
  };
}

export default useForecast;
