import rootReducer from "../src/reducers/index"
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';


const middleware = [logger, thunk]

const store = createStore(rootReducer,applyMiddleware(...middleware))

export default store