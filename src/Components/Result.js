export default function Result({ results }) {
    let questionsWithResult = 0;
    let correctResults = 0;

    results.map((result) => result ? questionsWithResult ++ : null);
    results.map(result => (result === "yes" || result === "maybe") ? correctResults ++ : null);

    return (
        <footer className="result">
            {(questionsWithResult === results.length)
              ? <ResultMessage correctResults={correctResults} questionsWithResult={questionsWithResult} />
              : null
            }
            <p>{questionsWithResult}/{results.length} CONCLUÍDOS</p>
            <div>
                {/* TODO: Change colors from style to className attribute */}
                {results.map((result) => {
                    if (result === "no") {
                        return <ion-icon name="close-circle" style={{ color: "#FF3030"}}></ion-icon>
                    }
                    if (result === "maybe") {
                        return <ion-icon name="help-circle" style={{ color: "#FF922E"}}></ion-icon>
                    }
                    if (result === "yes") {
                        return <ion-icon name="checkmark-circle" style={{ color: "#2FBE34"}}></ion-icon>
                    }
                })}
            </div>
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
            <bold>{message.header}</bold>
            <p>{message.message}!</p>
        </div>
    )
}