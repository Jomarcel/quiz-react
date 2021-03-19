import { FC, ReactElement, useEffect } from "react";
import ResultScreen from "./ResultScreen";
import Stats from "./Stats";
import Questionnaire from "./Questionnaire";
import { connect } from "react-redux";
import { onNextQuestionHandler, fetchQuestions } from "../actions/quizActions";

const mapStateToProps = ({ quizPage }: any) => {
  const { index, isGameOver, data, score } = quizPage;
  return {
    index,
    isGameOver,
    data,
    score,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    handleNextQuestion: () => dispatch(onNextQuestionHandler()),
    fetchQuestions: () => dispatch(fetchQuestions()),
  };
};

interface StateProps {
  index: number;
  isGameOver: boolean;
  data: any;
  score: number;
}

interface DispatchProps {
  handleNextQuestion: () => void;
  fetchQuestions: () => void;
}
type CombinedProps = StateProps & DispatchProps;

const Quiz: FC<CombinedProps> = ({
  index,
  isGameOver,
  data,
  score,
  handleNextQuestion,
  fetchQuestions,
}): ReactElement => {
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);
  if (!data.length) return <div />;
  const triviaQuestion = data[index];
  const { correct_answer, incorrect_answers, question } = triviaQuestion;
  const questionNumber = index + 1;
  const totalQuestions = data.length;

  return (
    <div style={{ marginTop: 90 }}>
      {isGameOver ? (
        <Stats
          score={score}
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
        />
      ) : (
        <div />
      )}
      {isGameOver ? (
        <ResultScreen questions={data} />
      ) : (
        <Questionnaire
          key={index}
          question={question}
          correctAnswer={correct_answer}
          incorrectAnswers={incorrect_answers}
          goNext={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
