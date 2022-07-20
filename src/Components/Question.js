export default function Question(
    {
        index,
        question,
        answer
    }
) {
    console.log(question, answer);
    return (
        <div className="question">
            <h3>Pergunta {index + 1}</h3>
            <ion-icon name="play-outline"></ion-icon>
        </div>        
    )
}