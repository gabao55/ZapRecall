export default function Result({ results }) {
    let questionsWithResult = 0;

    results.map((result) => result ? questionsWithResult ++ : "");

    return (
        <footer className="result">
            <p>{questionsWithResult}/4 CONCLUÍDOS</p>
        </footer>
    )
}