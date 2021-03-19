import {ActionTypes} from "../constants/quiz"

import quizData from "../QuizData"

const totalQuestions = quizData.length


const initialState = {
    score: 0,
    index: 0,
    isGameOver: false,
    data: [],
    userAnswer:[],
}

const quizPageReducer = (state = initialState, action:any) => {
    switch(action.type) {
        case ActionTypes.NEXT_QUESTION:
            let nextIndex = state.index
            let setGameOver = state.isGameOver
            {state.index >= totalQuestions -1? setGameOver = true: nextIndex += action.payload}
            return {...state, index: nextIndex, isGameOver:setGameOver}

        case ActionTypes.SET_USER_ANSWER:
             return {
                ...state,
                userAnswer:[...state.userAnswer,  {selectedAnswer:action.payload.selectedAnswer, question: action.payload.question, answers: action.payload.answers}]
            }

       case ActionTypes.CHANGE_SCORE:
            return {
                ...state,
                score: state.score + action.payload
            }
      case ActionTypes.FETCH_DATA:
            return {
                ...state,
                data: action.payload
            }
     default:
         return state
    }
}
export default quizPageReducer