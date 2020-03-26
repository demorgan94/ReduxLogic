import * as types from '../types/weatherTypes'
import { WeatherAction } from './weather';

export const incrementNumberOfRequestsMade = () => ({
    type: types.INCREMENT_NUMBER_OF_REQUESTS_MADE
});

export const getWheatherData = (city: string): WeatherAction => ({
    type: types.GET_WEATHER_FOR_CITY,
    payload: city
});