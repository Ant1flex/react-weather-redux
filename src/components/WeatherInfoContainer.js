import React from 'react'
import { connect } from 'react-redux'
import { loadData, setCityNameText, setCountryNameText, setErrorText, setHumidityText, setTemperatureText, setWindSpeedText } from '../store/actions'
import WeatherInfo from './WeatherInfo'

function WeatherInfoContainer({ searchedCity, dataFromApi, city, country, temperature, wind, humidity, error, loadData, setCityNameText, setCountryNameText, setTemperatureText, setWindSpeedText, setHumidityText, setErrorText }){
    return(
        <WeatherInfo
        searchedCity = { searchedCity }
        dataFromApi = { dataFromApi }
        city = { city }
        country = { country }
        temperature = { temperature }
        wind = { wind }
        humidity = { humidity }
        error = { error }
        loadData = {loadData}
        setCityNameText = {setCityNameText}
        setCountryNameText = {setCountryNameText}
        setTemperatureText = {setTemperatureText}
        setWindSpeedText = {setWindSpeedText}
        setHumidityText = {setHumidityText}
        setErrorText = {setErrorText}
        ></WeatherInfo>
    )
}

const mapStateToProps = (state) => {
    return{
        searchedCity: state.searchedCity,
        dataFromApi: state.dataFromApi,
        city: state.city,
        country: state.country,
        temperature: state.temperature,
        wind: state.wind,
        humidity: state.humidity,
        error: state.error
        
        // city: state.dataFromApi.name,
        // country: state.dataFromApi.sys.country,
        // temperature: Math.trunc(state.dataFromApi.main.temp),
        // wind: Math.round((state.dataFromApi.wind.speed * 3.6)*100)/100,
        // humidity: state.dataFromApi.main.humidity,
        // error: state.error
    }
}

const mapDispatchToProps = {
    loadData: loadData,
    setCityNameText: setCityNameText,
    setCountryNameText: setCountryNameText,
    setTemperatureText: setTemperatureText,
    setWindSpeedText: setWindSpeedText,
    setHumidityText: setHumidityText,
    setErrorText: setErrorText
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfoContainer)