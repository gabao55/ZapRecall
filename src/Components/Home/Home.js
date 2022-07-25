import "./style.css";
import logo from "../assets/logo.png";

export default function Home({ setIsStarted, zapsGoal, setZapsGoal }) {
    return (
        <div className="home">
            <img src={logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <input 
              type="text" 
              placeholder="Digite sua meta de zaps..." 
              onChange={event => setZapsGoal(event.target.value)} 
            />
            <button className={zapsGoal ? null : "unavailable"} onClick={() => setIsStarted(true)}>Iniciar Recall!</button>
        </div>
    )
}