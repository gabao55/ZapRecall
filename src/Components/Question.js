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

    const [isTurned, setIsTurned] = React.useState(true);

    return (
        <>
            {isTurned 
                ? <TurnedCard index={index} results={results} setIsTurned={setIsTurned} /> 
                : <Card index={index} question={question} answer={answer} results={results} setResults={setResults} setIsTurned={setIsTurned} />
            }
        </>      
    )
}

function TurnedCard({index, results, setIsTurned}) {
    function setIcon() {
        console.log(results[index]);
        switch (results[index-1]) {
            case "no":
                return "close-circle";
            case "maybe":
                return "help-circle";
            case "yes":
                return "checkmark-circle";
            default:
                return "play-outline";
        }
    }
    const icon=setIcon();

    return (
        <li key={index} 
          className={`question ${results[index-1]}`}
          onClick={() => results[index-1] ? null : setIsTurned(false) }
        >
            <h3>Pergunta {index}</h3>
            <ion-icon name={icon}></ion-icon>
        </li>
    )
}

function Card({
    index,
    question,
    answer,
    results,
    setResults,
    setIsTurned
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
                    onClick={() => {responseNo(); setIsTurned(true)}}
                >Não lembrei</button>
                <button name="maybe" 
                    onClick={() => {responseMaybe(); setIsTurned(true)}}
                >Quase não lembrei</button>
                <button name="yes" 
                    onClick={() => {responseYes(); setIsTurned(true)}}
                >Zap!</button>
            </div>
        </>
    );

    return (
        <div className="card">
            <p>{showsAnswer ? answer : question}</p>
            {showsAnswer
                ? zaps
                : <img src="./assets/arrow.png" alt="arrow to flip cards" onClick={() => setShowsAnswer(true)} />
            }
        </div>
    )
}