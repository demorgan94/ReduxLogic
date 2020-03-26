export interface RequestState {
    numberOfRequests: number
}

export interface RequestAction {
    type: string;
    payload?: any;
}

export type RequestTypes = RequestAction;