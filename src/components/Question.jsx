import React from "react";

const Question = ({
  category,
  difficulty,
  question,
  btnFalse,
  btnTrue,
  handleAnswerButtonClick,
}) => {
  return (
    <div className="questionBody">
      <div className="questionTitle">
        <h3>Category: {category}</h3>
        <h3>Difficutly: {difficulty}</h3>
      </div>
      <div className="questionMain">
        <p>{question}</p>
      </div>
      <div className="questionBtns">
        <button
          className="false"
          value="False"
          onClick={(e) => handleAnswerButtonClick(e.target.value)}
        >
          {btnFalse}
        </button>
        <button
          className="true"
          value="True"
          onClick={(e) => handleAnswerButtonClick(e.target.value)}
        >
          {btnTrue}
        </button>
      </div>
    </div>
  );
};

Question.defaultProps = {
  category: "General Knowledge",
  difficulty: "Hard",
  question: "You are a software developer right?",
  btnFalse: "False",
  btnTrue: "True",
};
export default Question;
