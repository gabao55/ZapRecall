import "./style.css";

export default function Result({ 
    numberOfCards,
    results,
    cards,
    shuffleArray,
    setCards,
    setResults,
    setIsStarted,
    setCardCounter
}) {
    let correctResults = 0;

    results.map(result => (result === "yes" || result === "maybe") ? correctResults ++ : null);

    function restartGame() {
        setCards(shuffleArray(cards));
        setResults([]);
        setIsStarted(false);
        setCardCounter(0);
    }

    return (
        <footer className="result">
            {(numberOfCards === results.length)
              ? <ResultMessage correctResults={correctResults} questionsWithResult={numberOfCards} />
              : null
            }
            <p>{results.length}/{numberOfCards} CONCLUÍDOS</p>
            <div>
                {/* TODO: Change colors from style to className attribute */}
                {results.map((result) => {
                    if (result === "no") {
                        return <ion-icon name="close-circle" style={{ color: "#FF3030"}}></ion-icon>
                    } else if (result === "maybe") {
                        return <ion-icon name="help-circle" style={{ color: "#FF922E"}}></ion-icon>
                    } else if (result === "yes") {
                        return <ion-icon name="checkmark-circle" style={{ color: "#2FBE34"}}></ion-icon>
                    } else {
                        return null
                    }
                })}
            </div>
            {(numberOfCards === results.length)
              ? <button onClick={restartGame} >REINICIAR RECALL</button>
              : null
            }
        </footer>
    )
}

function ResultMessage({ correctResults, questionsWithResult }) {
    const success = {
        header: "🥳 Parabéns!",
        message: "Você não esqueceu de nenhum flashcard!"
    }
    const failure = {
        header: "😥  Putz...",
        message: "Ainda faltam alguns... Mas não desanime!"
    }

    const message = (correctResults === questionsWithResult) ? success : failure;

    return (
        <div className="result-state">
            <b>{message.header}</b>
            <p>{message.message}!</p>
        </div>
    )
}