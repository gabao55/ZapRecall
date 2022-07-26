import React from "react";
import "./style.css";
import flipIcon from "../assets/arrow.png"

export default function Question(
    {
        index,
        cardCounter,
        setCardCounter,
        cards,
        results,
        setResults,
        isCardSelected,
        setIsCardSelected
    }
) {

    const [isTurned, setIsTurned] = React.useState(true);

    return (
        <>
            {isTurned 
                ? <TurnedCard index={index} results={results} setIsTurned={setIsTurned} isCardSelected={isCardSelected} setIsCardSelected={setIsCardSelected} /> 
                : <Card cards={cards} cardCounter={cardCounter} setCardCounter={setCardCounter} results={results} setResults={setResults} setIsTurned={setIsTurned} setIsCardSelected={setIsCardSelected} />
            }
        </>      
    )
}

function TurnedCard({index, results, setIsTurned, isCardSelected, setIsCardSelected}) {
    function setIcon() {
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

    function flipCard() {
        if (!isCardSelected) {
            setIsTurned(false);
            setIsCardSelected(true);
        }
    }

    return (
        <li key={index} 
          className={`question ${results[index-1]}`}
          onClick={() => results[index-1] ? null : flipCard() }
        >
            <h3>Pergunta {index}</h3>
            <ion-icon name={icon}></ion-icon>
        </li>
    )
}

function Card({
    cardCounter,
    setCardCounter,
    cards,
    results,
    setResults,
    setIsTurned,
    setIsCardSelected
}) {
    const answer = cards[cardCounter].answer;
    const question = cards[cardCounter].question;
    const [showsAnswer, setShowsAnswer] = React.useState(false);


    function responseNo () {
        const newResults = [...results];
        newResults.push("no");
        setResults(newResults);
    }

    function responseMaybe () {
        const newResults = [...results];
        newResults.push("maybe");
        setResults(newResults);
    }

    function responseYes () {
        const newResults = [...results];
        newResults.push("yes");
        setResults(newResults);
    }

    function flipCard() {
        setIsTurned(true);
        setIsCardSelected(false);
        setCardCounter(cardCounter + 1);
    }

    const zaps = (
        <div className="zap-buttons">
            <button name="no" 
                onClick={() => {responseNo(); flipCard()}}
            >Não lembrei</button>
            <button name="maybe" 
                onClick={() => {responseMaybe(); flipCard()}}
            >Quase não lembrei</button>
            <button name="yes" 
                onClick={() => {responseYes(); flipCard()}}
            >Zap!</button>
        </div>
    );

    return (
        <div className="card">
            <p>{showsAnswer ? answer : question}</p>
            {showsAnswer
                ? zaps
                : <img src={flipIcon} alt="arrow to flip cards" onClick={() => setShowsAnswer(true)} />
            }
        </div>
    )
}