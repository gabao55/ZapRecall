import "./style.css";

export default function Result({ 
    numberOfCards,
    results,
    zapsGoal,
    setZapsGoal,
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
        setZapsGoal(0);
    }

    return (
        <footer className="result">
            {(numberOfCards === results.length)
              ? <ResultMessage correctResults={correctResults} zapsGoal={zapsGoal} />
              : null
            }
            <p>{results.length}/{numberOfCards} CONCLUÍDOS</p>
            <div>
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

function ResultMessage({ correctResults, zapsGoal }) {
    const success = {
        header: "🥳 Parabéns!",
        message: "Você não esqueceu de nenhum flashcard!"
    }
    const failure = {
        header: "😥  Putz...",
        message: "Ainda faltam alguns... Mas não desanime!"
    }

    const message = (correctResults >= zapsGoal) ? success : failure;

    return (
        <div className="result-state">
            <b>{message.header}</b>
            <p>{message.message}</p>
        </div>
    )
}