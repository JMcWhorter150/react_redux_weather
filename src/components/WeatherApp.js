import React from 'react';
import WeatherInput from '../containers/WeatherInputContainer';
import WeatherCard from '../containers/WeatherCardContainer'

export default function WeatherApp( {
    handleNext,
    handleLast
} ) {
    return (
        <div>
            <WeatherInput />
            <WeatherCard />
            <br />
            <button onClick={handleNext}>Next</button>
            <button onClick={handleLast}>Last</button>
        </div>
    );
}