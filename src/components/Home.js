import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";

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


    const fetchPokmons = async () => {
        try {
            const accessToken = localStorage.getItem("jwt-token")
            console.log(accessToken);
            await axios.get("http://localhost:4500/api/v0/getPokemons/", {
                headers: {
                    authorization: "Barer " + accessToken
                }
            }).then((res) => alert(res.data.message))

        } catch (error) {
            alert(error.message);
            console.log(error)
        }
    }
    const pokedata = fetchPokmons();

    console.log(pokedata);

    const handleLogout = () => {
        setLoggedIn(localStorage.removeItem("jwt-token"));
        localStorage.clear("jwt-token")
    }

    return (
        <>
            <div className="container p-2 d-flex flex-column">
                <div>
                    <button onClick={handleLogout} className="btn btn-danger m-4">Log Out</button>
                </div>
                <h1 className="alert alert-warning">Pokemons</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {pokedata.data.map((pokemon) => {
                        // console.log(pokemon)
                        return <div className="col">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                    <p className="card-text">{pokemon.weakness}</p>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
            </div>
        </>
    )
}

export default Home;