import {
    CHANGE_SEARCH_CITY_TEXT,
    PUT_DATA,
    LOAD_DATA,
    CHANGE_CITY_NAME_TEXT,
    CHANGE_COUNTRY_NAME_TEXT,
    CHANGE_TEMPERATURE_TEXT,
    CHANGE_WIND_SPEED_TEXT,
    CHANGE_HUMIDITY_TEXT,
    CHANGE_ERROR_TEXT,
    CHANGE_FAVOURITES_TEXT
} from './actions'

const defaultState = {
    city: '',
    country: '',
    temperature: '',
    wind: '',
    humidity: '',
    error: '',

    searchedCity: '',
    dataFromApi: {},

    favourites: []
}

export const reducer = (state = defaultState, action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case CHANGE_SEARCH_CITY_TEXT:
            return {
                ...state,
                searchedCity: action.payload
            }
        case PUT_DATA:
            return {
                ...state,
                dataFromApi: action.payload
            }
        case LOAD_DATA:
            return {
                ...state,
                dataFromApi: action.payload
            }
        case CHANGE_CITY_NAME_TEXT:
            return {
                ...state,
                city: action.payload
            }
        case CHANGE_COUNTRY_NAME_TEXT:
            return {
                ...state,
                country: action.payload
            }
        case CHANGE_TEMPERATURE_TEXT:
            return {
                ...state,
                temperature: action.payload
            }
        case CHANGE_WIND_SPEED_TEXT:
            return {
                ...state,
                wind: action.payload
            }
        case CHANGE_HUMIDITY_TEXT:
            return {
                ...state,
                humidity: action.payload
            }
        case CHANGE_ERROR_TEXT:
            return {
                ...state,
                error: action.payload
            }
        case CHANGE_FAVOURITES_TEXT:
            return {
                ...state,
                favourites: [...action.payload]
            }
            
    }
    return state
}