import React from "react";
import ReactDom from "react-dom";
import Home from "./Components/Home/Home";
import Quizz from "./Components/Quizz/Quizz";
import "./Components/Common/reset.css";
import "./Components/Common/style.css";

function App() {
    const allCards = [
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

    const [isStarted, setIsStarted] = React.useState(false);
    const [zapsGoal, setZapsGoal] = React.useState(0);

    return (
        <>
            {isStarted 
              ? <Quizz 
                  setIsStarted={setIsStarted} 
                  zapsGoal={zapsGoal}
                  setZapsGoal={setZapsGoal}
                  allCards={allCards}
                />
              : <Home
                  setIsStarted={setIsStarted}
                  zapsGoal={zapsGoal}
                  setZapsGoal={setZapsGoal}
                  allCards={allCards}
                />}
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));