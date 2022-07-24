import React from "react";
import ReactDom from "react-dom";
import Home from "./Components/Home/Home";
import Quizz from "./Components/Quizz/Quizz";
import "./Components/Common/reset.css";
import "./Components/Common/style.css";

function App() {

    const [isStarted, setIsStarted] = React.useState(false);

    return (
        <>
            {isStarted ? <Quizz /> : <Home setIsStarted={setIsStarted} />}
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));