import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import catReducer from './categoryPosts/reducers';
import mainReducer from './mainPosts/reducers';
import detailReducer from './detailMovie/reducers';
import searchReducer from './searchPosts/reducers';

const rootReducer = combineReducers({
  catReducer,
  mainReducer,
  detailReducer,
  searchReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
