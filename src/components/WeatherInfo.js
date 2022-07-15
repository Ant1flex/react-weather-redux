import React, { useEffect } from 'react'

function WeatherInfo({ searchedCity, dataFromApi, city, country, temperature, wind, humidity, error, setCityNameText, setCountryNameText, setTemperatureText, setWindSpeedText, setHumidityText, setErrorText }) {

    useEffect(() => {
        if (dataFromApi.name === searchedCity) {
            setCityNameText(dataFromApi.name)
            setCountryNameText(dataFromApi.sys.country)
            setTemperatureText(Math.trunc(dataFromApi.main.temp))
            setWindSpeedText(Math.round((dataFromApi.wind.speed * 3.6) * 100) / 100)
            setHumidityText(dataFromApi.main.humidity)
            setErrorText('')
        } else if(searchedCity === '') {
            console.log('SearchBox is empty')
        } else {
            setCityNameText('')
            setCountryNameText('')
            setTemperatureText('')
            setWindSpeedText('')
            setHumidityText('')
            setErrorText('Please enter correct city name.')
        }
        // eslint-disable-next-line
    }, [dataFromApi])

    return (
        <div className='weatherInfo'>
            { city &&
                <div>
                    <h3 className='infoHeader'>{city}, {country}</h3>
                    <h4 className='infoText'>Temperature: {temperature} °С
                        <br />Wind speed: {wind} km/h
                        <br />Humidity: {humidity} %</h4>
                </div>
            }
            { error &&
                <div>
                    <h3>{error}</h3>
                </div>
            }
        </div>
    );
}

export default WeatherInfo;