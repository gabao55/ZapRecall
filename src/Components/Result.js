export default function Result({ results }) {
    let questionsWithResult = 0;

    results.map((result) => result ? questionsWithResult ++ : "");

    return (
        <footer className="result">
            <p>{questionsWithResult}/4 CONCLUÍDOS</p>
            <div>
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