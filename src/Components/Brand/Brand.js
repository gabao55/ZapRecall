import "./style.css";
import logo from "../assets/logo.png"

export default function Brand() {
    return (
        <div className="brand">
            <img src={logo} alt="Logo" />
            <h1>ZapRecall</h1>
        </div>
    )
}