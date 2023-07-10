import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Pokemon() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState("")
    useEffect(() => {
        const accessToken = localStorage.getItem("jwt-token");
        const url = `https://pokemon-api-of93.onrender.com/api/v0/getPokemons/${id}`;
        const options = {
            headers: {
                "authorization": "Barer " + accessToken
            }
        }
        const fetchPokmonByID = async () => {
            try {
                await axios
                    .get(url, options)
                    .then((res) => setPokemon(res.data))
                    .catch((error) => {
                        console.log(error)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokmonByID()
    }, [id])

    return (
        <>
            <div className="container p-2 d-flex flex-column">
                <div className="card mt-3 container row row-cols-1 row-cols-md-3 g-4">
                    <img className="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22780%22%20height%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20780%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893613c57b%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A39pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893613c57b%22%3E%3Crect%20width%3D%22780%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22290.234375%22%20y%3D%22152.4%22%3E780x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card cap"></img>
                    <div className="card-body" key={pokemon._id}>
                        <h5 className="card-title">Pokemon Name: {pokemon.name}</h5>
                        <p className="card-text">Weakness: {[pokemon.weakness].join(" ")}</p>
                        <p className="card-text">Srengths: {[pokemon.strength].join(" ")}</p>
                        <p className="card-text">Moves: {[pokemon.moves.join(" ")]}</p>
                        <p className="card-text"><small className="text-muted">Id: {pokemon._id}</small></p>
                    </div>
                    <button className="btn btn-primary m-2" onClick={() => { navigate("/") }}>Go to Pokemons</button>
                </div>
            </div>
        </>
    )
}

export default Pokemon;