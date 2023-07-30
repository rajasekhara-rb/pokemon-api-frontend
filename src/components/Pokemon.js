import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Pokemon() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState({});

    const [abilities, setAbilities] = useState([]);
    const [evolutions, setEvolutions] = useState([]);
    const [stats, setStats] = useState([]);
    const [type, setType] = useState([]);
    const [weaknesses, setWeaknesses] = useState([]);

    const statsRep = (val) => {
        let out = [];
        for (let c = 1; c <= 10; c++) {
            if (val >= c) {
                // for (let i = 1; i <= val; i++) {
                out.push(<div style={{ background: "blue", height: "10px", margin: "5px" }}></div>)
                // }
            } else {
                out.unshift(<div style={{ background: "white", height: "10px", margin: "5px" }}></div>)
            }
        }

        return out;
    }


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
                        setAbilities(res.data.abilities);
                        setEvolutions(res.data.evolutions);
                        setStats(res.data.stats);
                        setType(res.data.type);
                        setWeaknesses(res.data.weaknesses);

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
            <div className="container">
                <div className="alert alert-info">
                    <button className="btn btn-primary" onClick={() => { navigate("/") }}>Home</button>
                </div>
                <div className="name-id" style={{ textAlign: "center" }}>
                    <span style={{ fontWeight: "bolder", fontSize: "25px", color: "#000000" }}>
                        {pokemonData.name}
                    </span>
                    <span style={{ fontSize: "25px", color: "#9fa1a0" }}>
                        #{pokemonData.id}
                    </span>
                </div>
                <div className="img-desc"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        marginTop: "25px"
                    }}>
                    <div style={{ background: "#edf0ee", width: "500px", borderRadius: "10px" }}>
                        <img style={{ width: "500px", height: "500px" }}
                            className="card-img-top"
                            src={pokemonData.avatar ? pokemonData.avatar : "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22259%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20259%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1893613c57d%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1893613c57d%22%3E%3Crect%20width%3D%22259%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.25%22%20y%3D%2296%22%3E259x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"}
                            alt="Card cap">
                        </img>
                    </div>
                    <div style={{
                        width: "500px",
                        padding: "20px"
                    }}>
                        <p style={{ fontSize: "18px" }}>{pokemonData.description}</p>
                        <ul style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            padding: "20px",
                            gridGap: "20px",
                            borderRadius: "10px",
                            background: "#30a7d7",
                            width: "100%",
                            height: "100%",
                            marginTop: "50px"
                        }}>
                            <li style={{ listStyle: "none" }}>
                                <span style={{ display: "block", color: "#ffffff", fontWeight: "bolder" }}>Height</span>
                                <span style={{ display: "block", color: "#000000", fontWeight: "bolder" }}><strong>{pokemonData.height}</strong></span>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <span style={{ display: "block", color: "#ffffff", fontWeight: "bolder" }}>Weight</span>
                                <span style={{ display: "block", color: "#000000", fontWeight: "bolder" }}>{pokemonData.weight}</span>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <span style={{ display: "block", color: "#ffffff", fontWeight: "bolder" }}>Category</span>
                                <span style={{ display: "block", color: "#000000", fontWeight: "bolder" }}>{pokemonData.category}</span>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <span style={{ display: "block", color: "#ffffff", fontWeight: "bolder" }}>Abilities</span>
                                <span style={{ display: "block", color: "#000000", fontWeight: "bolder" }}>{pokemonData.abilities}</span>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <span style={{ display: "block", color: "#ffffff", fontWeight: "bolder" }}>Gender</span>
                                <span style={{ display: "block", color: "#000000", fontWeight: "bolder" }}>{pokemonData.gender}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="stats" style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    marginTop: "25px",
                    // width:"500px"
                }}>
                    <ul className="statistics" style={{ width: "500px", padding: "20px", background: "#a4a4a4", display: "flex", borderRadius: "10px" }}>
                        {stats.map((e) => {
                            return <li style={{
                                listStyle: "none",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                // alignItems: "center",
                                width: "100px",
                                margin: "5px",
                                padding: "0px"
                            }}>
                                <div>
                                    {statsRep(e.value)}
                                </div>
                                <div style={{ fontSize: "10px", textAlign: "center", fontWeight: "bolder" }}>
                                    {e.name.toUpperCase()}
                                </div>
                            </li>
                        })}


                    </ul>
                    <div style={{ width: "500px", padding: "20px" }}>
                        <div>
                            <h4>Type</h4>
                            <div >
                                {type.map((e) => {
                                    return <span key={e} className="m-2 btn  px-3 py-1" style={{ backgroundColor: (e === "Grass") ? "green" : (e === "Poison") ? "purple" : (e === "Fire") ? "orange" : "lightblue" }}>{e}</span>
                                })}
                            </div>
                        </div>
                        <div>
                            <h4>Weaknesses</h4>
                            <div >
                                {weaknesses.map((e) => {
                                    return <span key={e}
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

                </div>

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