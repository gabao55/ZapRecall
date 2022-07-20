import ReactDom from "react-dom";
import Home from "./Components/Home";
import Quizz from "./Components/Quizz";

function App() {
    return (
        <>
            <Quizz />
        </>
    )
}

ReactDom.render(<App />, document.querySelector(".root"));