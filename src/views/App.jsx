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
            <section id="about">
                <div className="section-label">
                    Sobre mim
                </div>
                <div className="container-wrapper">
                    <div id="details">
                        <h2>
                            Construindo desde <br></br>
                            <span> os 15 anos </span>
                        </h2>
                        <p>
                            Desenvolvedor full-stack com experiência em sistemas reais — desde plataformas de advocacia até
                            soluções de comunicação omnichannel. Gosto de código que resolve problema de verdade.
                        </p>

                        <p> Minha stack principal é PHP/Laravel no back-end e Vue.js no front, com experiência em Node.js e Docker.
                            Conheço o ciclo completo: do banco de dados à interface.
                        </p>

                        <p>
                            Estou sempre estudando. Testes automatizados, filas, Redis, TypeScript — aprendo porque quero construir coisas mais sólidas,
                            não só pra colocar no currículo.
                        </p>
                    </div>
                    <div id="about-stats">
                        <div className="stat">
                            <h3> 3 </h3>
                            <p> Empresas em que trabalhei </p>
                        </div>
                        <div className="stat">
                            <h3> 6+ </h3>
                            <p> Anos estudando e desenvolvendo </p>
                        </div>
                        <div className="stat">
                            <h3> 21 </h3>
                            <p> Anos de idade — muita estrada pela frente
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default App