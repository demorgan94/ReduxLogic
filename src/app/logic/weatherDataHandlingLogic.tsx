import * as types from '../types/weatherTypes'
import { createLogic } from 'redux-logic'
import axios from 'axios'

const appId = "6123f0d4550276077ceb83ab0a1bdacc";

interface ProcessAction {
    type: string,
    payload?: any
}

const getWeatherDataLogic = createLogic({
    type: types.GET_WEATHER_FOR_CITY,
    latest: true,

    processOptions: {
        dispatchReturn: true,
        successType: types.GET_WEATHER_FOR_CITY_SUCCESSFUL,
        failType: types.GET_WEATHER_FOR_CITY_FAILURE
    },

    async process(action: ProcessAction) {
        console.log('started process with action type: ' + action.type);
        console.log('started process with action payload: ' + action.payload);

        return await axios(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&APPID=${appId}`)
            .then(res => res.data);
    }
});

export default [
    getWeatherDataLogic
];