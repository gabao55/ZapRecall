export default function Home({ setIsStarted }) {
    return (
        <div className="home">
            <img src="./assets/logo.png" alt="Logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setIsStarted(true)}>Iniciar Recall!</button>
        </div>
    )
}