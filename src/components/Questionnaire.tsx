import { ReactElement, FC, useState, useEffect } from "react";
import "../styles/trivia-item.css";
import { shuffleArray } from "../utils";
import {
  setUserAnswer,
  updateScore,
  selectedAnswer,
} from "../actions/quizActions";
import { connect } from "react-redux";

interface Props {
  correctAnswer?: string;
  incorrectAnswers: string[];
  question?: string;
  goNext?: () => void;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateScore: () => dispatch(updateScore()),
    setUserAnswer: (userAnswer: any, question: any, answers: any) =>
      dispatch(setUserAnswer(userAnswer, question, answers)),
    setAnswer: (userAnswer: any) => dispatch(selectedAnswer(userAnswer)),
  };
};

interface DispatchProps {
  updateScore: () => void;
  setUserAnswer: (userAnswer: any, question: any, answers: any) => void;
  setAnswer: (userAnswer: any) => void;
}
type MyProps = Props & DispatchProps;
const Questionnaire: FC<MyProps> = ({
  correctAnswer,
  incorrectAnswers,
  question,
  goNext,
  setUserAnswer,
  setAnswer,
  updateScore,
}): ReactElement => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const hasPickedAnswer = selectedAnswer !== null;
  const allAnswers = [...incorrectAnswers, correctAnswer];
  const [shuffledAnswers, setShuffledAnswers] = useState<[]>([]);

  let nextButtonClassName = !hasPickedAnswer
    ? "trivia-item__button trivia-item__next-button trivia-item__next-button--disabled"
    : "trivia-item__button trivia-item__next-button";

  useEffect(() => {
    const shuffledAnswers = shuffleArray(allAnswers);
    setShuffledAnswers(shuffledAnswers);
  }, []);

  const handleSelectedAnswer = (e: any) => {
    const answerSelected = e.target.innerHTML;
    setSelectedAnswer(answerSelected);
    setUserAnswer(answerSelected, question, shuffledAnswers);
    // setAnswer(answerSelected);
    const isCorrectAnswer = answerSelected === correctAnswer;
    if (isCorrectAnswer) {
      updateScore();
    }
  };

  let quizObj = (
    <div className="trivia">
      <div className="trivia__button">QUIT</div>
      <div className="trivia-item">
        <p className="trivia-item__question">{question}</p>
        <ul className="trivia-item__answers">
          {shuffledAnswers.map((item: string, i: number) => {
            let className = "trivia-item__button";
            if (hasPickedAnswer) {
              const checkSelectedAnswer = item === selectedAnswer;
              const isCorrectAnswer = item === correctAnswer;
              if ((checkSelectedAnswer && isCorrectAnswer) || isCorrectAnswer) {
                className += " trivia-item__button--correct";
              } else if (checkSelectedAnswer && !isCorrectAnswer) {
                className += " trivia-item__button--incorrect";
              } else {
                className += " trivia-item__button--disabled";
              }
            }
            return (
              <li key={i}>
                {" "}
                <button
                  onClick={handleSelectedAnswer}
                  className={className}
                  disabled={hasPickedAnswer}
                >
                  {item}
                </button>
              </li>
            );
          })}
          <button
            onClick={goNext}
            disabled={!hasPickedAnswer}
            className={nextButtonClassName}
          >
            Next
          </button>
        </ul>
      </div>
    </div>
  );
  return <> {quizObj}</>;
};

export default connect(null, mapDispatchToProps)(Questionnaire);
