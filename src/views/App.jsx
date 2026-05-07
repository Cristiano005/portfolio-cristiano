import Header from './components/Header';

function App() {

    return (
        <>
            <Header></Header>
            <main id="home">
                <h2 className="text"> DEV </h2>
                <span className="btn btn-tag" id="status-tag"> Disponível para novas oportunidades </span>
                <h1> 
                    Cristiano <br></br>
                    <span> Full-Stack </span> <br></br>
                    Developer
                </h1>
                <p id="subtitle">
                    Transformo ideias em sistemas reais. PHP, Laravel, Vue.js e Node.js — com foco em código limpo e entrega que funciona.
                </p>
                <div className="actions">
                    <a href="./src/assets/curriculo-cristiano.pdf" className="btn btn-action" download> Baixar currículo ↓</a>
                    <a href="#" className="btn btn-action"> GitHub ↗</a>
                    <a href="#" className="btn btn-action"> Linkendln ↗</a>
                </div>
            </main>
        </>
    )
}

export default App