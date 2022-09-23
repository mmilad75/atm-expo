import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancer = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancer(applyMiddleware(thunk));

export const store = createStore(reducers, middlewares);
