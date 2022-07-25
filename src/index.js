import React from "react";
import ReactDom from "react-dom";
import Home from "./Components/Home/Home";
import Quizz from "./Components/Quizz/Quizz";
import "./Components/Common/reset.css";
import "./Components/Common/style.css";

function App() {

    const [isStarted, setIsStarted] = React.useState(false);
    const [zapsGoal, setZapsGoal] = React.useState(0);

    return (
        <>
            {isStarted 
              ? <Quizz 
                  setIsStarted={setIsStarted} 
                  zapsGoal={zapsGoal}
                />
              : <Home
                  setIsStarted={setIsStarted}
                  zapsGoal={zapsGoal}
                  setZapsGoal={setZapsGoal}
                />}
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));