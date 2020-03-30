import * as types from '../types/weatherTypes'
import { WeatherAction } from './weather';
import { RequestAction } from './requests';

export const incrementNumberOfRequestsMade = (): RequestAction => ({
    type: types.INCREMENT_NUMBER_OF_REQUESTS_MADE
});

export const getWheatherData = (city: string): WeatherAction => ({
    type: types.GET_WEATHER_FOR_CITY,
    payload: city
});