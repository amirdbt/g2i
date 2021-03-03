import React, { useState } from "react";
import { fetchQuestions } from "../api";
import { useQuery } from "react-query";
import Question from "./Question";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [count, setCount] = useState(0);
  const { data, isError, isSuccess, isLoading } = useQuery(
    "questions",
    fetchQuestions,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    }
  );
  let questions = [];
  if (isSuccess) {
    questions = data.data.results;
    console.log(questions);
  }
  if (isLoading) {
    <p>Loading...</p>;
  }
  if (isError) {
    console.log("Error");
  }

  //change current question
  const handleAnswerButtonClick = (answerOption) => {
    console.log(answerOption, questions[currentQuestion].correct_answer);
    if (questions[currentQuestion].correct_answer === answerOption) {
      setCount(count + 1);
    }
    console.log(count);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(
        `You scored ${count} out of ${questions.length}. Refresh to restart`
      );
    }
  };

  return (
    <div className="quiz">
      <h1>Questions</h1>
      {isSuccess && (
        <>
          {currentQuestion + "/" + questions.length}
          <Question
            category={questions[currentQuestion].category}
            correct_answer={questions[currentQuestion].correct_answer}
            difficulty={questions[currentQuestion].difficulty}
            question={questions[currentQuestion].question}
            handleAnswerButtonClick={handleAnswerButtonClick}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
