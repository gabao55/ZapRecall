import "./style.css";
import logo from "../assets/logo.png"

export default function Home({ setIsStarted }) {
    return (
        <div className="home">
            <img src={logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setIsStarted(true)}>Iniciar Recall!</button>
        </div>
    )
}