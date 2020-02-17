import {connect} from 'react-redux';
import WeatherCard from '../components/WeatherCard';

function kToF (k){ // openweather API returns temp in kelvin. This converts it to fahrenheit
    return parseInt(((k-273.15) * (9/5)) + 32);
 }

function mapStateToProps(state) {
    return {
        date: state.currentWeather.dt_txt.slice(0,10),
        time: state.currentWeather.dt_txt.slice(11),
        highTemp: kToF(state.currentWeather.main.temp_max),
        lowTemp: kToF(state.currentWeather.main.temp_min),
        weather: state.currentWeather.weather.main,
        description: state.currentWeather.weather.description,
        wind: state.currentWeather.wind.speed
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(WeatherCard);