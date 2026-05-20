import { useState } from 'react';

import Header from './components/Header';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

import experiencesList from '../utils/experiences';
import projectsList from '../utils/projects';
import skillsList from '../utils/skills';

function App() {

    const [activeId, setActiveId] = useState(1);

    return (
        <>
            <Header></Header>
            <main id="home">
                <div className="bg-text"> DEV </div>
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
                    <a href="./src/assets/curriculo-cristiano-sousa.pdf" className="btn btn-action btn-primary" target="_blank" download> Baixar currículo ↓</a>
                    <a href="https://github.com/Cristiano005" className="btn btn-action btn-secondary" target="_blank"> GitHub ↗</a>
                    <a href="https://linkedin.com/in/cristiano-silva-de-sousa-645119204/" className="btn btn-action btn-secondary" target="_blank"> LinkedIn ↗</a>
                </div>
                <div id="scroll">
                    <span id="scroll-line"></span>
                    scroll
                </div>
            </main>
            <section id="about">
                <div className="section-label">
                    Sobre mim
                </div>
                <div className="container-wrapper">
                    <div id="details">
                        <div className="section-title">
                            <h2>
                                Construindo desde <br></br>
                                <span> os 15 anos </span>
                            </h2>
                        </div>
                        <p>
                            Desenvolvedor full-stack com experiência em sistemas reais — desde plataformas de advocacia até
                            soluções de comunicação omnichannel. Gosto de código que resolve problema de verdade.
                        </p>

                        <p> Minha stack principal é <strong> PHP/Laravel </strong> no back-end e <strong> Vue.JS </strong> no front, com experiência em <strong> Node.js </strong> e Docker.
                            Conheço o ciclo completo: do banco de dados à interface.
                        </p>

                        <p>
                            Estou sempre estudando. Testes automatizados, filas, Redis, TypeScript — aprendo porque quero construir coisas mais sólidas,
                            não só pra colocar no currículo.
                        </p>
                    </div>
                    <div id="about-stats">
                        <div className="stat">
                            <div className="stat-num"> 3 </div>
                            <div className="stat-label"> Empresas em que trabalhei </div>
                        </div>
                        <div className="stat">
                            <div className="stat-num"> 6+ </div>
                            <div className="stat-label"> Anos estudando e desenvolvendo </div>
                        </div>
                        <div className="stat">
                            <div className="stat-num"> 21 </div>
                            <div className="stat-label"> Anos de idade — muita estrada pela frente
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section id="experiences">
                <div className="section-label">
                    Experiências
                </div>
                <div className="section-title">
                    <h2>
                        Onde já <br></br>
                        <span> trabalhei </span>
                    </h2>
                </div>
                <div className="experience-list active">
                    {experiencesList.map(experience => <ExperienceCard key={experience.id} experience={experience} activeId={activeId} onClick={() => {
                        setActiveId(experience.id)
                    }}/>)
                    }
                </div>
            </section>
            <section id="projects">
                <div className="section-label">
                    Projetos
                </div>
                <div className="section-title">
                    <h2>
                        O que <br></br>
                        <span> construí </span>
                    </h2>
                </div>
                <div className="projects-grid">
                    {projectsList.map(project => <ProjectCard key={"project" +project.id} project={project}
                        onClick={project.isActive = !project.isActive} />)
                    }
                </div>
            </section>
            <section id="skills">
                <div className="section-label">
                    Habilidades
                </div>
                <div className="section-title">
                    <h2>
                        O que <br></br>
                        <span> sei fazer </span>
                    </h2>
                </div>
                <div id="skills-grid">
                    {skillsList.map(skill => <SkillCard key={"skill" + skill.id} skill={skill} />)}
                </div>
            </section>
            <section id="contact">
                <div className="section-label">
                    Contato
                </div>
                <div id="contact-inner">
                    <div id="contact-info">
                        <p>
                            Estou aberto a oportunidades de trabalho como desenvolvedor full-stack.
                            Se tiver uma vaga ou quiser trocar ideia sobre um projeto, me chama.
                        </p>
                        <div id="contact-links">
                            <a href="#" className="contact-link" target="_blank">
                                <span> ✉ </span>
                                cristianosilvadesousa05@gmail.com
                            </a>
                            <a href="https://www.linkedin.com/in/cristiano-ss/" className="contact-link" target="_blank">
                                <span> In </span>
                                Linkedln
                            </a>
                            <a href="https://github.com/Cristiano005" className="contact-link" target="_blank">
                                <span> gh </span>
                                Github
                            </a>
                            <a href="#" className="contact-link" target="_blank">
                                <span> ☎ </span>
                                (19) 98175-5372
                            </a>
                        </div>
                    </div>
                    <div id="extres">
                        <h3> Vamos <br />
                            construir algo <br />
                            <span> juntos? </span>
                        </h3>
                        <a href="#" className="btn btn-action">
                            Enviar mensagem →
                        </a>
                    </div>
                </div>
            </section>
            <footer>
                <h5> 
                    Cristiano Silva de Sousa — Nova Odessa, SP
                    <span> 2026 </span>
                </h5>
            </footer>
        </>
    )
}

export default App