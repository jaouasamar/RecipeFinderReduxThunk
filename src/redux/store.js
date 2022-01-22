import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import recipeReducer from './reducer'


const devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store=createStore(recipeReducer,compose(applyMiddleware(thunk),devtools));
export default store