export interface WeatherState {
    isFetching: boolean,
    weatherSummary: string
}

export interface WeatherAction {
    type: string;
    payload?: any;
}

export type WeatherTypes = WeathertAction;