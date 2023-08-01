import { Link } from "react-router-dom";

const Navbar = (props) => {

    return (
        <nav style={{
            width: "100%",
            background: "#000",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            alignItems: "center"
        }}>
            <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <li style={{ listStyle: "none", fontSize: "25px", margin: "0 10px" }}>
                    <Link to={"/"} style={{ textDecoration: "none", color: "#ffffff" }}>
                        Home
                    </Link>
                </li>
                <li style={{ listStyle: "none", fontSize: "25px", margin: "0 10px" }}>
                    <Link to={"/createpokemon"} style={{ textDecoration: "none", color: "#ffffff" }}>
                        Create Pokemon
                    </Link>
                </li>
                <li style={{ listStyle: "none", fontSize: "25px", margin: "0 10px" }}>
                    <Link to={"/docs"} style={{ textDecoration: "none", color: "#ffffff" }}>
                        Docs
                    </Link>
                </li>
                <li style={{ listStyle: "none", fontSize: "25px", margin: "0 10px" }}>
                    <a href="https://pokemon-api-of93.onrender.com/" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "#ffffff" }}>
                        Go to API
                    </a>
                </li>
            </ul>

            <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <li style={{ listStyle: "none", fontSize: "25px", margin: "0 10px", display: "flex" }}>
                    <input style={{ borderRadius: "10px", margin: "0 10px" }} type="search" placeholder="search pokemons"></input>
                    <button type="submit" style={{ borderRadius: "10px", margin: "0 10px" }}>Search</button>
                </li>
                <li style={{ listStyle: "none", fontSize: "25px", margin: "0 10px" }} onClick={() => { props.handleLogout() }}>
                    <a href="/" style={{ textDecoration: "none", color: "#ffffff" }}>
                        Logout
                    </a>
                </li>
            </ul>
        </nav >
    )
}

export default Navbar;