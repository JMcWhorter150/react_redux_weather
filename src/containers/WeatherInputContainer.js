import {connect} from 'react-redux';
import axios from 'axios';
import { actionSetCity, actionGetWeather } from '../actions';
import WeatherInput from '../components/WeatherInput';



function mapDispatchToProps(dispatch) {
    return {
        _handleSubmit: async (city) => {
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=eed10df1bb1e00547d394e39384346be`;
            const result = await axios.get(url);
            console.log(result.data);
            dispatch(actionSetCity(city));
            dispatch(actionGetWeather(result.data.list));
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WeatherInput);