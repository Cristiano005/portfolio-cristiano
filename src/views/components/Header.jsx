export default function Header() {

    return (
        <header>
            <nav>
                <a href="#" className="logo"> CS </a>
                <div className="links">
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Experience</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <a href="#" className="btn btn-contact-me contact-me">
                    Fale comigo
                </a>
            </nav>
        </header>
    )

}