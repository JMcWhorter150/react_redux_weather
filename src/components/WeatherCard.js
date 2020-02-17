import React from 'react';

export default function WeatherCard({ 
    date,
    time,
    highTemp,
    lowTemp,
    weather,
    description,
    wind
}) {
    return (
        <div>
            {date ? 
            <ul>
                <li>Date: {date}</li>
                <li>Time: {time}</li>
                <li>High: {highTemp} °F</li>
                <li>Low: {lowTemp} °F</li>
                <li>Humidity: {humidity}%</li>
                <li>Weather: {weather}</li>
                <li>{description}</li>
                <li>Wind: {wind} mph</li>
            </ul>
            :
            ""}
        </div>
    );
}