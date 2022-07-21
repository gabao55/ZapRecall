import React from "react";
import ReactDom from "react-dom";
import Home from "./Components/Home";
import Quizz from "./Components/Quizz";

function App() {

    const [isStarted, setIsStarted] = React.useState(false);

    return (
        <>
            {isStarted ? <Quizz /> : <Home setIsStarted={setIsStarted} />}
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));