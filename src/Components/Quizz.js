import React from "react";
import Question from "./Question";
import Brand from "./Brand";
import Result from "./Result";

export default function Quizz () {
    const cards = [
        {
            question: "a",
            answer: "Resposta a"
        },
        {
            question: "b",
            answer: "Resposta b"
        },
        {
            question: "c",
            answer: "Resposta c"
        },
        {
            question: "d",
            answer: "Resposta d"
        },
    ];

    const [results, setResults] = React.useState([null, null, null, null]);

    return (
        <div className="quizz">
            <Brand />

            <ul>
                {cards.map((card, index) => {
                    return <Question 
                        index={index + 1} 
                        question={card.question} 
                        answer={card.answer}
                        results={results}
                        setResults={setResults}
                    />;
                })}
            </ul>

            <Result results={results} />
        </div>
    )
}