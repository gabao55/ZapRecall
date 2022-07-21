import React from "react";

export default function Question(
    {
        index,
        question,
        answer,
        results,
        setResults
    }
) {
    console.log(question, answer);

    const [isTurned, setIsTurned] = React.useState(true);

    return (
        <>
            {isTurned 
                ? <TurnedCard index={index} setIsTurned={setIsTurned} /> 
                : <Card index={index} question={question} answer={answer} results={results} setResults={setResults} />
            }
        </>      
    )
}

function TurnedCard({index , setIsTurned}) {
    return (
        <li key={index} className="question" onClick={() => setIsTurned(false)}>
            <h3>Pergunta {index}</h3>
            {/* TODO: Change this icon */}
            <ion-icon name="play-outline"></ion-icon>
        </li>
    )
}

function Card({
    index,
    question,
    answer,
    results,
    setResults
}) {
    const [showsAnswer, setShowsAnswer] = React.useState(false);

    function responseNo () {
        const newResults = [...results];
        newResults[index-1] = "no";
        setResults(newResults);
    }

    function responseMaybe () {
        const newResults = [...results];
        newResults[index-1] = "maybe";
        setResults(newResults);
    }

    function responseYes () {
        const newResults = [...results];
        newResults[index-1] = "yes";
        setResults(newResults);
    }

    const zaps = (
        <>
            <div className="zap-buttons">
                <button name="no" 
                    onClick={responseNo}
                >Não lembrei</button>
                <button name="maybe" 
                    onClick={responseMaybe}
                >Quase não lembrei</button>
                <button name="yes" 
                    onClick={responseYes}
                >Zap!</button>
            </div>
        </>
    );

    return (
        <div className="card">
            <p>{showsAnswer ? answer : question}</p>
            {showsAnswer
                ? zaps
                : <ion-icon name="arrow-forward" onClick={() => setShowsAnswer(true)}></ion-icon>
            }
        </div>
    )
}