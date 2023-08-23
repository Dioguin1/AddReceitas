import { Link } from "react-router-dom";
import './estilo.css'

function Header() {
    return (
        <header>
            <h2>Aprender na Cozinha</h2>

            <div className="">
                <Link to="/">Receitas</Link>
                <Link to="/nova">Nova Receita</Link>
            </div>
        </header>
    )
}

export default Header;