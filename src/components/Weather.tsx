import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'

/** Redux */
import { useSelector } from 'react-redux'
import { RootState } from '../app/reducers'

const Weather = () => {

    const [city, setCity] = useState<string>("");

    const cityState = useSelector((state: RootState) => state.weather.weatherSummary)

    useEffect(() => {
        setCity(city);
    }, [cityState])

    return (
        <div>
            <h1>Weather</h1>
        </div>
    )
}

export default Weather
