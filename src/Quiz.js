// src/Quiz.js
import React, { useState } from 'react';
import quizData from './data/quizData';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleOptionClick = (option) => {
    // Use only the first character to match with answer
    setSelectedAnswer(option.charAt(0));
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>

      {showFeedback && (
        <div>
          {selectedAnswer === currentQuestion.answer ? (
            <p style={{ color: 'blue' }}>Correct!</p>
          ) : (
            <p style={{ color: 'red' }}>
              Incorrect. The correct answer is: {currentQuestion.answer}
              <br />
              Explanation: {currentQuestion.explanation}
            </p>
          )}
        </div>
      )}

      <button onClick={handleNextQuestion} disabled={!showFeedback}>
        Next Question
      </button>
    </div>
  );
};

export default Quiz;
