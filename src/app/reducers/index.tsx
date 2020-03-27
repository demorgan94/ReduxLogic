import { combineReducers } from '@reduxjs/toolkit'
import weatherDataHandling from './weatherDataHandling'
import requestLogging from './requestLogging';

const rootReducer = combineReducers({
    weather: weatherDataHandling,
    request: requestLogging
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;