import { useState } from "react";
import data from "./mock/data.json";

const Card = () => {
    const [started, setStarted] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [results, setResults] = useState([]);

    const question = data[currentQuestion];

    const handleAnswerClick = (answer) => {
        if (selectedAnswer) return;

        setSelectedAnswer(answer);

        if (answer.isCorrect) {
            setScore((prev) => prev + 1);
        }

        setResults((prev) => [
            ...prev,
            {
                question: question.question,
                selected: answer.text,
                correct: question.answers.find((a) => a.isCorrect).text,
                isCorrect: answer.isCorrect,
            },
        ]);
    };

    const nextQuestion = () => {
        setSelectedAnswer(null);
        setCurrentQuestion((prev) => prev + 1);
    };

    const isFinished = currentQuestion >= data.length;

    if (!started) {
        return (
            <div className="quiz-container">
                <div className="card">
                    <h1>Anime Quiz</h1>

                    <p>
                        Test your anime knowledge with {data.length} questions.
                    </p>

                    <button
                        className="start-btn"
                        onClick={() => setStarted(true)}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        );
    }
    if (isFinished) {
        return (
            <div className="quiz-container">
                <div className="card">
                    <h1>Quiz Finished ✅</h1>

                    <h2>
                        Final Score: {score} / {data.length}
                    </h2>

                    <div className="results">
                        {results.map((result, index) => (
                            <div key={index} className="result-item">
                                <h3>{result.question}</h3>

                                <p>
                                    Your answer:
                                    <span
                                        className={
                                            result.isCorrect ? "correct-text" : "wrong-text"
                                        }
                                    >
                    {" "}
                                        {result.selected}
                  </span>
                                </p>

                                {!result.isCorrect && (
                                    <p>
                                        Correct answer:
                                        <span className="correct-text">
                      {" "}
                                            {result.correct}
                    </span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="card">
                <h2>
                    Question {currentQuestion + 1} / {data.length}
                </h2>

                <div className="question">
                    {question.question}
                </div>

                <div className="answers">
                    {question.answers.map((answer) => {
                        let className = "answer";

                        if (selectedAnswer) {
                            if (answer.isCorrect) {
                                className += " correct";
                            }

                            if (
                                selectedAnswer.id === answer.id &&
                                !answer.isCorrect
                            ) {
                                className += " wrong";
                            }
                        }

                        return (
                            <button
                                key={answer.id}
                                className={className}
                                onClick={() => handleAnswerClick(answer)}
                            >
                                {answer.text}
                            </button>
                        );
                    })}
                </div>

                {selectedAnswer && (
                    <button className="next-btn" onClick={nextQuestion}>
                        {currentQuestion + 1 === data.length
                            ? "Finish Quiz"
                            : "Next Question"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;