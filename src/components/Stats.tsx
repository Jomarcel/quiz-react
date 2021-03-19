import React from "react";
import "../styles/stats.css";

interface Props {
  score: number;
  questionNumber?: number;
  totalQuestions: number;
}
interface IProps {
  label?: string;
  value?: string | number;
}
const Stat: React.FC<IProps> = ({ label, value }): React.ReactElement => {
  return (
    <li className="stats__stat-container">
      <div className="stats__stat-label">{label}</div>
      <div className="stats__stat-value">{value}</div>
    </li>
  );
};

const Stats: React.FC<Props> = ({
  score,
  questionNumber,
  totalQuestions,
}): React.ReactElement => {
  const percentageScore = (score / totalQuestions) * 100;
  return (
    <ul className="stats">
      <li className="stats__stat-container">
        <div className="stats__stat-value">Your Score: {percentageScore}%</div>
      </li>
      {/* <Stat label="Question" value={`${questionNumber} / ${totalQuestions}`} /> */}
    </ul>
  );
};

export default Stats;
