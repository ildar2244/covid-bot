import axios from "axios";
import {RapidAPIKey, RapidAPIHost} from '../config.js'

export function getByCountry(country) {
    return axios({
        method: 'GET',
        url: 'https://covid-193.p.rapidapi.com/statistics',
        params: {country: country},
        headers: {
            'X-RapidAPI-Key': RapidAPIKey,
            'X-RapidAPI-Host': RapidAPIHost
        }
    })
}