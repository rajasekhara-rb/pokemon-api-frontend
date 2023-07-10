import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate();
    // console.log(loggedIn);
    useEffect(() => {
        if (!loggedIn) {
            navigate("/signin");
        } else {
            navigate("/")
        }
    }, [loggedIn, navigate]);


    const [data, setData] = useState([])
    useEffect(() => {
        const fetchPokmons = async () => {
            const accessToken = localStorage.getItem("jwt-token")
            try {
                await axios
                    .get("https://pokemon-api-of93.onrender.com/api/v0/getPokemons",
                        {
                            headers: {
                                "authorization": "Barer " + accessToken
                            }
                        }
                    )
                    .then((res) => setData(res.data))
                    .catch((error) => {
                        console.log(error)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokmons()
    }, [])
    // useEffect(() => {
    //     fetchPokmons()
    // }, [])

    const handleLogout = () => {
        setLoggedIn(localStorage.removeItem("jwt-token"));
        localStorage.removeItem("jwt-token");
    }

    return (
        <>
            <div className="container p-2 d-flex flex-column">
                <div className="d-flex justify-content-between alert alert-info">
                    <h1 className="w-60">Pokemons List</h1>
                    <div className="d-flex justify-content-around w-40">
                        <button onClick={()=>{navigate("/createPokemon")}} className="btn btn-primary mx-4">Create Pokemon</button>
                        <button onClick={handleLogout} className="btn btn-danger mx-4">Log Out</button>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data.map((pokemon) =>
                        <Link to={"pokemon/" + pokemon._id}>
                            <div className="col">
                                <div className="card">
                                    <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22259%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20259%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893613c57d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893613c57d%22%3E%3Crect%20width%3D%22259%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.25%22%20y%3D%2296%22%3E259x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{pokemon.name}</h5>
                                        <p className="card-text">{pokemon._id}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home;