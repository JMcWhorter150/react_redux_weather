import {connect} from 'react-redux';
import Axios from 'axios';
import { actionNext, actionLast, actionGetWeather } from '../actions';
import WeatherApp from '../components/WeatherApp';

const url = 

function mapDispatchToProps(dispatch) {
    return {
        handleNext: () => {dispatch(actionNext())},
        handleLast: () => {dispatch(actionLast())},
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WeatherApp);