import {connect} from 'react-redux';
import { actionSetCity } from '../actions';
import WeatherInput from '../components/WeatherInput';

function mapDispatchToProps(dispatch) {
    return {
        _handleSubmit: (city) => {dispatch(actionSetCity(city))}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WeatherInput);