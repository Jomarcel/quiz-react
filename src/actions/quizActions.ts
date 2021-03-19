
import {ActionTypes} from "../constants/quiz"
import quizData from "../QuizData"

export const setUserAnswer = (userAnswer:any, question:any, answers:any) => {
    return {
        type: ActionTypes.SET_USER_ANSWER,
        payload:{selectedAnswer:userAnswer, question:question, answers:answers}
    }
} 

export const selectedAnswer= (userAnswer:any) => {
    return {
        type: ActionTypes.SET_ANSWER,
        payload:userAnswer
    }
} 


export const onNextQuestionHandler = () => {
    return {
        type: ActionTypes.NEXT_QUESTION,
        payload:1
    }
} 



export const updateScore = () => {
    return {
        type: ActionTypes.CHANGE_SCORE,
        payload:1
    }
} 


export const fetchQuestions = () => {
    return {
        type: ActionTypes.FETCH_DATA,
        payload:quizData
    }
}

