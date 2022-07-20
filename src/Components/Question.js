import React from "react";

export default function Question(
    {
        index,
        question,
        answer
    }
) {
    console.log(question, answer);

    const [isTurned, setIsTurned] = React.useState(false);

    return (
        <>
            {isTurned 
                ? <TurnedCard index={index} /> 
                : <Card question={question} answer={answer}/>
            }
        </>      
    )
}

function TurnedCard({index}) {
    return (
        <li className="question">
            <h3>Pergunta {index}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </li>
    )
}

function Card({
    question,
    answer
}) {
    return (
        <div className="card">
            <p>O que é JSX?</p>
            <ion-icon name="arrow-forward"></ion-icon>
        </div>
    )
}