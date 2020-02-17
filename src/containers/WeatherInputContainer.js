import {connect} from 'react-redux';
import axios from 'axios';
import { actionSetCity } from '../actions';
import WeatherInput from '../components/WeatherInput';



function mapDispatchToProps(dispatch) {
    return {
        _handleSubmit: async (city) => {
            const url = `api.openweathermap.org/data/2.5/forecast?id=${city}&appid=eed10df1bb1e00547d394e39384346be`;
            const result = await axios.get(url);
            dispatch(actionSetCity(city));
            dispatch(actionGetWeather(result.list))
        }
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WeatherInput);