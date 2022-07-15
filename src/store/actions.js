import { apiKeyWeather } from '../secrets/config'

export const CHANGE_SEARCH_CITY_TEXT = 'CHANGE_SEARCH_CITY_TEXT'
export const PUT_DATA = 'PUT_DATA'
export const LOAD_DATA = 'LOAD_DATA'

export const CHANGE_CITY_NAME_TEXT = 'CHANGE_CITY_NAME_TEXT'
export const CHANGE_COUNTRY_NAME_TEXT = 'CHANGE_COUNTRY_NAME_TEXT'
export const CHANGE_TEMPERATURE_TEXT = 'CHANGE_TEMPERATURE_TEXT'
export const CHANGE_WIND_SPEED_TEXT = 'CHANGE_WIND_SPEED_TEXT'
export const CHANGE_HUMIDITY_TEXT = 'CHANGE_HUMIDITY_TEXT'
export const CHANGE_ERROR_TEXT = 'CHANGE_ERROR_TEXT'

export const CHANGE_FAVOURITES_TEXT = 'CHANGE_FAVOURITES_TEXT'

const API_KEY = apiKeyWeather;

export const setSearchCityText = (searchedCity) => ({
    type: CHANGE_SEARCH_CITY_TEXT,
    payload: searchedCity
})


export const putData = (dataFromApi) => ({
    type: PUT_DATA,
    payload: dataFromApi
})

export const loadData = (searchedCity, dataFromApi) => async (dispatch, getState) => {
    let res =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}&units=metric`)
    //console.log(searchedCity)
    //console.log(API_KEY)
    dataFromApi = await res.json()
    //console.log(dataFromApi)
    //console.log(getState())
    dispatch({
        type: LOAD_DATA,
        payload: dataFromApi
    })
    //console.log(getState())
    
    //console.log('Cheking weather in '+searchedCity+'...')
}  

export const setCityNameText = (city) => ({
    type: CHANGE_CITY_NAME_TEXT,
    payload: city
})

export const setCountryNameText = (country) => ({
    type: CHANGE_COUNTRY_NAME_TEXT,
    payload: country
})

export const setTemperatureText = (temperature) => ({
    type: CHANGE_TEMPERATURE_TEXT,
    payload: temperature
})

export const setWindSpeedText = (wind) => ({
    type: CHANGE_WIND_SPEED_TEXT,
    payload: wind
})

export const setHumidityText = (humidity) => ({
    type: CHANGE_HUMIDITY_TEXT,
    payload: humidity
})

export const setErrorText = (error) => ({
    type: CHANGE_ERROR_TEXT,
    payload: error
})

export const setFavouritesText = (favourites) => ({
    type: CHANGE_FAVOURITES_TEXT,
    payload: favourites
})

