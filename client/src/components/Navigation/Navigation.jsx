import { NavLink } from "react-router-dom"

import "./Navigation.css"


const Navigation = () => {
    return (
        <header className="navigation">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tarsasjatekok">Board&nbsp;Games</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation