import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Pokemon() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState({});

    const [strengths, setStrengths] = useState([]);
    const [moves, setMoves] = useState([]);
    const [weakness, setWeakness] = useState([]);
    // pokemonData.strength.forEach(element => {
    //     setStrengths(<li>{element}</li>)
    // });

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
                    .then((res) => {
                        setPokemonData(res.data);
                        setStrengths(res.data.strength);
                        setMoves(res.data.moves);
                        setWeakness(res.data.weakness)
                        console.log(res.data);
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            } catch (error) {
                console.log(error)
            }
        }
        fetchPokmonByID()
    }, [id])

    return (
        <>

            <div className="container-fluid">
                <div className="name-id" style={{ textAlign: "center" }}>
                    <span style={{ fontWeight: "bolder", fontSize: "25px", color: "#000000" }}>
                        {pokemonData.name}
                    </span>
                    <span style={{ fontSize: "25px", color: "#9fa1a0" }}>
                        #{pokemonData.id}
                    </span>
                </div>
                <div className="img-desc" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ background: "#edf0ee", width: "400px" }}>
                        <img style={{ width: "250px" }}
                            className="card-img-top"
                            src={pokemonData.avatar ? pokemonData.avatar : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22259%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20259%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893613c57d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893613c57d%22%3E%3Crect%20width%3D%22259%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.25%22%20y%3D%2296%22%3E259x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
                            alt="Card cap">
                        </img>
                    </div>
                    <div style={{ width: "600px" }}>
                        <p>{pokemonData.description}</p>
                        <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "lightblue" }}>
                            <li>
                                <span className="d-block">Height</span>
                                <span className="d-block">{pokemonData.height}</span>
                            </li>
                            <li>
                                <span className="d-block">Weight</span>
                                <span className="d-block">{pokemonData.weight}</span>
                            </li>
                            <li>
                                <span className="d-block">Category</span>
                                <span className="d-block">{pokemonData.category}</span>
                            </li>
                            <li>
                                <span className="d-block">Abilities</span>
                                <span className="d-block">{pokemonData.abilities}</span>
                            </li>
                            <li>
                                <span className="d-block">Gender</span>
                                <span className="d-block">{pokemonData.gender}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="stats">
                    <div>

                    </div>
                    <div>
                        <div>
                            <h4>Type</h4>
                            <div >
                                {pokemonData.type.map((e) => {
                                    return <span className="m-2 btn  px-3 py-1" style={{ backgroundColor: (e === "Grass") ? "green" : (e === "Poison") ? "purple" : (e === "Fire") ? "orange" : "lightblue" }}>{e}</span>
                                })}
                            </div>
                        </div>
                        <div>
                            <h4>Weaknesses</h4>
                            <div >
                                {pokemonData.weaknesses.map((e) => {
                                    return <span
                                        className="m-2 btn  px-3 py-1"
                                        style={{
                                            backgroundColor:
                                                (e === "Grass") ? "green" :
                                                    (e === "Poison") ? "purple" :
                                                        (e === "Fire") ? "orange" :
                                                            (e === "Psychic") ? "pink" :
                                                                (e === "Flying") ? "blue" :
                                                                    "lightblue"
                                        }}>{e}</span>
                                })}
                            </div>
                        </div>
                    </div>

                </div> */}

                <div className="evoluations">

                </div>

            </div>
            {/* <div className="container p-2 d-flex flex-column">
                <div className="card mt-3 container row row-cols-1 row-cols-md-3 g-4">
                    <img className="card-img-top" src={pokemonData.avatar ? pokemonData.avatar : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22259%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20259%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893613c57d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893613c57d%22%3E%3Crect%20width%3D%22259%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.25%22%20y%3D%2296%22%3E259x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"} alt="Card cap"></img>
                    <div className="card-body" key={pokemonData._id}>
                        <h5 className="card-title">Pokemon Name: {pokemonData.name}</h5>
                        <ul className="card-text">
                            <h6>Srengths:</h6>
                            {strengths.map((e) => {
                                return <li>{e}</li>
                            })}
                        </ul>
                        <ul className="card-text">
                            <h6>weakness:</h6>
                            {weakness.map((e) => {
                                return <li>{e}</li>
                            })}
                        </ul>
                        <ul className="card-text">
                            <h6>Moves: </h6>
                            {moves.map((e) => {
                                return <li>{e}</li>
                            })}
                        </ul>

                        <p className="card-text"><small className="text-muted">Id: {pokemonData._id}</small></p>
                    </div>
                    <button className="btn btn-primary m-2" onClick={() => { navigate("/") }}>Go to Pokemons</button>
                </div>
            </div> */}
        </>
    )
}

export default Pokemon;