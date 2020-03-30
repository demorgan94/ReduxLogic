import * as types from '../types/weatherTypes'
import { WeatherAction, WeatherState } from '../actions/weather'

const initialState: WeatherState = {
    isFetching: false,
    weatherSummary: 'No weather data fetched yet...'
}

function weatherDataHandling(state = initialState, { type, payload }: WeatherAction): WeatherState {
    switch (type) {

        case types.GET_WEATHER_FOR_CITY:
            return {
                ...state,
                isFetching: true
            }

        case types.GET_WEATHER_FOR_CITY_SUCCESSFUL:
            return {
                ...state,
                isFetching: false,
                weatherSummary: payload.weather[0].description
            }

        case types.GET_WEATHER_FOR_CITY_FAILURE:
            return {
                ...state,
                isFetching: false,
                weatherSummary: "Failure fetching weather data..."
            }

        default:
            return state
    }
}

export default weatherDataHandling;
