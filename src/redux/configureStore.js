import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Ages } from './ages';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            ages: Ages
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}