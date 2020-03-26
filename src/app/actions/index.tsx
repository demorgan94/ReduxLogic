import * as types from '../types/weatherTypes'

export const incrementNumberOfRequestsMade = () => ({
    type: types.INCREMENT_NUMBER_OF_REQUESTS_MADE
});

export const getWheatherData = (city: string) => ({
    type: types.GET_WEATHER_FOR_CITY,
    payload: city
});