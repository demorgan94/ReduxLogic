import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogicMiddleware } from 'redux-logic'
import axios from 'axios'
import rootReducer from './reducers'
import rootLogic from './logic/index'
import { WeatherTypes } from './actions/weather'

const deps: WeatherTypes = {
    httpClient: axios
}

const logicMiddleware = createLogicMiddleware(rootLogic, deps);

const middleware = [...getDefaultMiddleware(), logicMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
});

export type AppDispatch = typeof store.dispatch;

export default store;