import logo from "../../images/logo.png"
import sanduiche from "../../images/sanduiche.png"
import "./navbar.css"

function Navbar() {
    return (
        <nav>
            <div>
                <img
                    id="nav-img"
                    src= {logo}
                    alt="logo"
                />
                <img
                    id="nav-btn"
                    src={sanduiche}
                    alt="btn"
                />
            </div>
        </nav>
    )
}

export default Navbar;