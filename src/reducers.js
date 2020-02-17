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
            newState.currentWeather = state.totalWeatherData[state.currentWeatherIndex + 1 > 39 ? 39 : state.currentWeatherIndex + 1];
            break;
        case LAST:
            newState.currentWeather = state.totalWeatherData[state.currentWeatherIndex - 1 < 0 ? 0 : state.currentWeatherIndex - 1];
            break;
        case SET_CITY:
            newState.city = action.payload;
            break;
        case GET_WEATHER:
            newState.totalWeatherData = action.payload;
            break;
        default:
            break;
    }

    return newState;
}