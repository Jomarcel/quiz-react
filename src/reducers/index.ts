import { combineReducers } from 'redux'
import quizPageReducer from "./quizReducer"


const rootReducer = combineReducers({
    quizPage:quizPageReducer
  })

export default rootReducer