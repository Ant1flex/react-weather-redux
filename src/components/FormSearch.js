import React, { useEffect, useRef} from 'react'
import FavoriteCity from './FavoriteCity'
import './styles.css'

import { apiKeyGeocoding } from '../secrets/config'

const API_KEY_GEOCODING = apiKeyGeocoding;

export default function FormSearch({inputCityNameRef, searchedCity, favourites, setFavouritesText, setSearchCityText, loadData}){

    const inputCityName = useRef(inputCityNameRef)

    useEffect(()=>{
        const raw = localStorage.getItem('state.favourites') || []
        setFavouritesText(JSON.parse(raw))
    // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        localStorage.setItem('state.favourites', JSON.stringify(favourites))
    }, [favourites])
    
    const removeFavoriteCity = (i) => {
        console.log('Deleting favorite city('+favourites[i]+')...')
        favourites.splice(i, 1);
        setFavouritesText(favourites)
        // --------------------------------------------------------------------------------------
        //localStorage.removeItem('state.favourites')
        //localStorage.setItem('state.favourites', JSON.stringify(favourites))
        // --------------------------------------------------------------------------------------
    }
    
    const searchByFavoriteCity = (i) => {
        console.log('Using favourite city('+favourites[i]+') to cheking weather...')
        let arr = favourites;
        inputCityName.current.value = arr[i];
        getWeather()
    }

    const addFavoriteCity = () => {
        console.log('Adding '+inputCityName.current.value+' to favourites...')
        if (inputCityName.current.value) {
            let uniqueArr = [];
            favourites.unshift(inputCityName.current.value);
            for (let str of favourites) {
                if (!uniqueArr.includes(str)) {
                    uniqueArr.push(str)
                }
            }
            if (favourites.length !== 4) {
                setFavouritesText(uniqueArr)
                //console.log(uniqueArr);
            } else {
                uniqueArr.pop();
                setFavouritesText(uniqueArr)
                //console.log(uniqueArr);
            }
        }
    }

    const eachFavorite = (item, i) => {
        return (
            <FavoriteCity key={i} index={i} deleteElement={removeFavoriteCity} searchByFavorite={searchByFavoriteCity}>
                {item}
            </FavoriteCity>
        );
    }

    const checkGeolocation = (event) => {
        console.log('Geolocation...')
        let input = inputCityName.current;
        let geolocatedCity = '';
        navigator.geolocation.getCurrentPosition(async function (position) {
            //console.log(position)
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            const dataFromApi = await fetch(`https://api.tomtom.com/search/2/reverseGeocode/${lat},${lng}.json?key=${API_KEY_GEOCODING}&language=en-US`);
            const dataToJson = await dataFromApi.json();
            console.log(dataToJson);
            //let i = dataToJson.['addresses'][0].address.countrySubdivision
            //geolocatedCity = i.slice(0, i.indexOf(' '));
            geolocatedCity = dataToJson.['addresses'][0].address.countrySubdivision.slice(0, dataToJson.['addresses'][0].address.countrySubdivision.indexOf(' '));
            input.value = geolocatedCity;
            console.log(geolocatedCity);
            getWeather(event)
        });
    }

    const getWeather = async (event) => {
        //event.preventDefault()
        const cityName = inputCityName.current.value
        console.log(cityName)
        setSearchCityText(cityName)
        console.log(inputCityName.current.value)
        console.log(setSearchCityText)
        loadData(cityName)
      }

        return (
            <form className='formSearch'>
                <input className='textbox' ref={inputCityName} type='text'  name='cityName' placeholder='Search for city...' autoComplete='off'></input>
                <button type='button' className='actionBTN' onClick={getWeather} title='Check weather'><i className='i-font i-search'></i></button>
                <button type='button' className='actionBTN' onClick={addFavoriteCity.bind(this)} title='Add to favourites'><i className='i-font i-favourites'></i></button>
                <button type='button' className='actionBTN' onClick={checkGeolocation} title='Geolocation'><i className='i-font i-geolocation'></i></button>
                
                { favourites[0] &&
                    <div className='favList'> Favourites:
                {
                    favourites.map(eachFavorite)
                }
                </div>
                }
                
            </form>
        );
}
