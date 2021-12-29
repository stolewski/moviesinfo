import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mainReducer from './movies/reducers';

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
