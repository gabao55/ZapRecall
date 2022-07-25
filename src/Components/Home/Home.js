import "./style.css";
import logo from "../assets/logo.png";

export default function Home({ setIsStarted, zapsGoal, setZapsGoal, allCards }) {
    function handleChange(value) {
        if (value < 1) {
            alert("O valor mínimo é 1!");
            return
        } else if (value > allCards.length) {
            alert(`O valor máximo é ${allCards.length}!`);
            return
        }

        setZapsGoal(value);
    }

    return (
        <div className="home">
            <img src={logo} alt="Logo" />
            <h1>ZapRecall</h1>
            <input 
              type="number" 
              placeholder="Digite sua meta de zaps..." 
              onChange={event => handleChange(event.target.value)} 
              min="0"
              max={allCards.length}
            />
            <button className={zapsGoal ? null : "unavailable"} onClick={() => setIsStarted(true)}>Iniciar Recall!</button>
        </div>
    )
}