export const NEXT = "NEXT";
export const LAST = "LAST";
export const SET_CITY = "SET_CITY";
export const GET_WEATHER = "GET_WEATHER";

export function actionNext() {
    return {
        type: NEXT
    }
}

export function actionLast() {
    return {
        type: LAST
    }
}

export function actionSetCity(city) {
    return {
        type: SET_CITY,
        payload: city
    }
}

export function actionGetWeather(weatherData) {
    return {
        type: GET_WEATHER,
        payload: weatherData
    }
}

