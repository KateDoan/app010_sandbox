import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addAges = (ages) => ({
    type: ActionTypes.ADD_AGES,
    payload: ages
});

export const agesLoading = () => ({
    type: ActionTypes.AGES_LOADING
});

export const agesFailed = (errmess) => ({
    type: ActionTypes.AGES_FAILED,
    payload: errmess
});

export const postPredict = (gender, race, age, bmi, smoke, veg, exercise) => (dispatch) => {

    dispatch(agesLoading(true));

    const newUser = {
        gender: gender,
        race: race,
        age: age,
        bmi: bmi,
        smoke: smoke,
        veg: veg,
        exercise: exercise
    }
    console.log('User ', newUser);

    return fetch(baseUrl + 'ages', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addAges(response)))
    .catch(error => dispatch(agesFailed(error.message)));
}

export const postCount = (counterName) => (dispatch) => {

    const counter = {
        "name": counterName
    }

    console.log('Counter ', counter);

    return fetch(baseUrl + 'counters', {
        method: 'POST',
        body: JSON.stringify(counter),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .catch(error => { console.log('postCounter', error.message)});
}