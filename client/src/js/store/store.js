import {routeReducers} from '../reducers'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
// async 
const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(routeReducers,composeEnhancer(applyMiddleware(thunk)))