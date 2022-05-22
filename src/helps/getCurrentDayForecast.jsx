import moment from "moment";

var today = new Date();
const getCurrentDayForecast = (data, title) => ({
  weekday: moment(today).format("dddd"),
  date: moment(today).format("MMMM Do"),
  location: title,
  temperature: Math.round(data.main.temp),
  weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  weatherDescription: data.weather[0].description
});

export default getCurrentDayForecast;
