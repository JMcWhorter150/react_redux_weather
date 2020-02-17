import React from 'react';
import WeatherInput from '../containers/WeatherInputContainer';
import WeatherCard from '../containers/WeatherCardContainer'

export default function WeatherApp( {
    handleNext,
    handleLast,
    handleGetWeather
} ) {
    return (
        <div>
            <WeatherInput />
            <WeatherCard />
            <br />
            <button onClick={handleNext}>Next</button>
            <button onClick={handleGetWeather}>Get Weather</button>
            <button onClick={handleLast}>Last</button>
        </div>
    );
}