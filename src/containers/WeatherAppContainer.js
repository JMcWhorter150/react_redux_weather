import {connect} from 'react-redux';
import { actionNext, actionLast } from '../actions';
import WeatherApp from '../components/WeatherApp';

function mapDispatchToProps(dispatch) {
    return {
        handleNext: () => {dispatch(actionNext())},
        handleLast: () => {dispatch(actionLast())}
    }
}

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(WeatherApp);