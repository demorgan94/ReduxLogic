import * as types from '../types/weatherTypes'
import { RequestState, RequestAction } from '../actions/requests'

const initialState: RequestState = {
    numberOfRequests: 0
}

function requestLogging(state = initialState, { type, payload }: RequestAction): RequestState {
    switch (type) {

        case types.INCREMENT_NUMBER_OF_REQUESTS_MADE:
            return {
                ...state,
                numberOfRequests: state.numberOfRequests + 1
            }

        default:
            return state
    }
}

export default requestLogging;
