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

    return (
        <div className="quizz">
            <Brand />

            <ul>
                {cards.map((card, index) => {
                    return <Question 
                        index={index} 
                        question={card.question} 
                        answer={card.answer} 
                    />;
                })}
            </ul>

            <Result />
        </div>
    )
}