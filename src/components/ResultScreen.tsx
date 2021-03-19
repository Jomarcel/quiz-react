import React, { FC, ReactElement } from "react";
import "../styles/end-screen.css";
import { connect } from "react-redux";

const mapStateToProps = ({ quizPage }: any) => {
  const { userAnswer } = quizPage;
  return {
    userAnswer,
  };
};

interface StateProps {
  userAnswer: any;
}

interface IProps {
  label?: string;
  value?: string | number;
}
interface Props {
  questions: any;
}

const EndStat: React.FC<IProps> = ({ label, value }): React.ReactElement => {
  return (
    <div className="end-screen__stat ">
      <div className="end-screen__stat-label">{label}</div>
      <div>{value}</div>
    </div>
  );
};

type MyProps = StateProps & Props;
const ResultScreen: FC<MyProps> = ({ questions, userAnswer }): ReactElement => {
  const answers = questions.map(
    ({ correct_answer }: { correct_answer: any }) => {
      return correct_answer;
    }
  );

  const processedAnswers = userAnswer.map((value: any, i: number) => {
    if (value.selectedAnswer === answers[i]) {
      return {
        correctAnswer: answers[i],
        isCorrect: true,
        question: value.question,
        answers: value.answers,
      };
    }
    return {
      correctAnswer: answers[i],
      isCorrect: false,
      question: value.question,
      answers: value.answers,
      wrongAnswer: value.selectedAnswer,
    };
  });

  return (
    <>
      <div className="result">
        {/* <h2 className="text-center font-weight-normal">Quiz Result</h2> */}
        {processedAnswers.map((value: any, index: any) => (
          <div
            key={index}
            className={`mb-2 ${value.isCorrect ? "bg-success" : "bg-danger"}`}
          >
            <div className="result-question">
              <h6 className="m-1 p-1">
                {index + 1}. {value.question}
              </h6>
              <div className="column">
                {value.answers.map((option: any, i: number) => (
                  <div key={i} className="col-6">
                    {i + 1}. {option}
                  </div>
                ))}
              </div>
              <div
                className={`m-1 p-1 text-bold ${
                  value.isCorrect ? "text-success" : "text-danger"
                }`}
              >
                Your answer is {value.isCorrect ? "Correct" : "Wrong"}.
              </div>
            </div>
          </div>
        ))}
        <div className="result__buttons">
          <div className="button">QUIT</div>
          <div className="button">CONTINUE</div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps)(ResultScreen);
// const ResultScreen: React.FC<Props> = ({ score }): React.ReactElement => {
//   return (
//     <div className="end-screen">
//       <h1>Results</h1>
//       <EndStat label="Score" value={score} />
//       <button className="end-screen__button">Resources</button>
//     </div>
//   );
// };
