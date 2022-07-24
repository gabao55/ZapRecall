import React from "react";
import Question from "../Question/Question";
import Brand from "../Brand/Brand";
import Result from "../Result/Result";
import "./style.css"

export default function Quizz () {
    const allcards = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript"
        },
        {
            question: "O React é __",
            answer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula"
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões"
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            question: "Usamos o npm para __",
            answer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            question: "Usamos props para __",
            answer: "passar diferentes informações para componentes"
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
    ];

    function shuffleArray(array) {
        array.sort(() => Math.random() - 0.5);
    }

    shuffleArray(allcards);
    const [cards] = React.useState([...allcards]);

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

            <Result numberOfCards={cards.length} results={results} />
        </div>
    )
}