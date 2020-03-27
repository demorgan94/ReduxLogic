import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

/** Redux */
import { useSelector } from 'react-redux'
import { RootState } from '../app/reducers'
import { WeatherAction } from '../app/actions/weather'

const Weather: React.FC = () => {

    const [city, setCity] = useState<WeatherAction>();

    const cityState = useSelector((state: RootState) => state.weather.weatherSummary);

    useEffect(() => {
        setCity(city);
    }, [cityState]);

    const handleClick = (city: string) => {

    }

    return (
        <div>
            <h1>Weather</h1>
        </div>
    )
}

export default Weather
