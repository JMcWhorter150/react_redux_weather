import React from 'react';
import WeatherInput from '../containers/WeatherInputContainer';

export default function WeatherApp() {
    return (
        <div>
            <WeatherInput />
            <WeatherCard />
            <br />
            <button>Next</button>
            <button>Last</button>
        </div>
    );
}