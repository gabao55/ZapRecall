import React from "react";
import Question from "../Question/Question";
import Brand from "../Brand/Brand";
import Result from "../Result/Result";
import "./style.css"

export default function Quizz ({ setIsStarted, zapsGoal, setZapsGoal, allCards }) {

    function shuffleArray(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffleArray(allCards);
    const [cards, setCards] = React.useState([...allCards]);

    const [results, setResults] = React.useState([]);
    const [isCardSelected, setIsCardSelected] = React.useState(false);
    const [cardCounter, setCardCounter] = React.useState(0);

    return (
        <div className="quizz">
            <Brand />

            <ul>
                {cards.map((card, index) => {
                    return <Question 
                        key={index + 1}
                        index={index + 1}
                        cardCounter={cardCounter}
                        setCardCounter={setCardCounter}
                        cards={cards}
                        results={results}
                        setResults={setResults}
                        isCardSelected={isCardSelected}
                        setIsCardSelected={setIsCardSelected}
                    />;
                })}
            </ul>

            <Result 
              numberOfCards={cards.length}
              results={results}
              zapsGoal={zapsGoal}
              setZapsGoal={setZapsGoal}
              cards={cards}
              shuffleArray={shuffleArray}
              setCards={setCards}
              setResults={setResults}
              setIsStarted={setIsStarted}
              setCardCounter={setCardCounter}
            />
        </div>
    )
}