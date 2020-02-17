import { NEXT, LAST, SET_CITY, GET_WEATHER } from "./actions";

const defaultState = {
    city: "",
    totalWeatherData: [],
    currentWeather: {},
    currentWeatherIndex: 0
};

export default function weather(state=defaultState, action) {
    const newState = {...state};

    switch (action.type) {
        case NEXT:
            if (state.currentWeatherIndex === 39) {
                break;
            } else {
                newState.currentWeather = state.totalWeatherData[state.currentWeatherIndex + 1];
                newState.currentWeatherIndex = state.currentWeatherIndex + 1
                break;
            }
        case LAST:
            if (state.currentWeatherIndex === 0) {
                break;
            } else {
                newState.currentWeather = state.totalWeatherData[state.currentWeatherIndex - 1];
                newState.currentWeatherIndex = state.currentWeatherIndex - 1;
                break;
            }
        case SET_CITY:
            newState.city = action.payload;
            break;
        case GET_WEATHER:
            newState.totalWeatherData = action.payload;
            newState.currentWeather = newState.totalWeatherData[newState.currentWeatherIndex];
            break;
        default:
            break;
    }

    return newState;
}