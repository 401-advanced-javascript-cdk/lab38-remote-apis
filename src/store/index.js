import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import peopleReducer from './people-reducer.js';
import personReducer from './person-reducer.js';
import thunk from './middleware/thunk.js';

const combinedReducers = combineReducers({
  people: peopleReducer,
  person: personReducer,
});

export default () => createStore(combinedReducers, composeWithDevTools(applyMiddleware(thunk)));