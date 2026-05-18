export default function Header() {

    return (
        <header>
            <nav>
                <a href="#" className="logo"> CS </a>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#about">Sobre</a>
                        </li>
                        <li>
                            <a href="#experiences">Experiências</a>
                        </li>
                        <li>
                            <a href="#projects">Projetos</a>
                        </li>
                        <li>
                            <a href="#skills">Habilidades</a>
                        </li>
                    </ul>
                </div>
                <a href="#contact" className="btn btn-contact-me contact-me">
                    Fale comigo
                </a>
            </nav>
        </header>
    )

}