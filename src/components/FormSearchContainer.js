import React from 'react'
import { connect } from 'react-redux'
import { setFavouritesText, setErrorText, setSearchCityText, loadData } from '../store/actions'
import FormSearch from './FormSearch'

function FormSearchContainer({searchedCity, favourites, inputCityNameRef, setFavouritesText, setSearchCityText, loadData}){
    return(
        <FormSearch
        searchedCity = { searchedCity }
        favourites = { favourites }
        inputCityNameRef = { inputCityNameRef }
        setFavouritesText = { setFavouritesText }
        setSearchCityText = { setSearchCityText }
        loadData = { loadData }
        ></FormSearch>
    )
}

const mapStateToProps = (state) => {
    return{
        searchedCity: state.searchedCity,
        favourites: state.favourites,
        inputCityName: state.inputCityNameRef
    }
}

const mapDispatchToProps = {
    setFavouritesText: setFavouritesText,
    setSearchCityText: setSearchCityText,
    setErrorText: setErrorText,
    loadData: loadData
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSearchContainer)