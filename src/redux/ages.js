import * as ActionTypes from './ActionTypes';

export const Ages = (state = {
        isLoading: true,
        errMess: null,
        ages: null
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_AGES:
            return {...state, isLoading: false, errMess: null, ages: action.payload};

        case ActionTypes.AGES_LOADING:
            return {...state, isLoading: true, errMess: null, ages: null};

        case ActionTypes.AGES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, ages: null};

        default:
            return state;
    }
}