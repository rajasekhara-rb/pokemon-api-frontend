import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "./navbar";

function CreatePokemon() {
    const navigate = useNavigate();
    const [pokemonDetails, setPokemonDetails] = useState({
        id: "",
        name: "",
        avatar: "",
        description: "",
        category: "",
        height: "",
        weight: "",
        abilities: "",
        gender: "",
        type: [],
        weaknesses: [],
        stats: [{}],
        evolutions: []
    });
    console.log(pokemonDetails);
    // const pokemonStats = [];
    // const [pokemonStats, setPokemonStats] = useState([]);
    // console.log(pokemonStats)

    // const handlePokemonStats = (e) => {
    //     // e.preventDefault()
    //     // pokemonStats.push({ name: e.target.name, value: e.target.value })
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     setPokemonDetails(() => ({ ...pokemonStats.stats, [name]: value }));

    // }
    // pokemonDetails.stats.push(pokemonStats);


    // { id, name, avatar, description, category, height, weight, abilities, gender, type, weaknesses, stats, evolutions }
    const token = localStorage.getItem("jwt-token");
    // console.log(token);
    const url = "https://pokemon-api-of93.onrender.com/api/v0/createpokemon";
    const options = {
        headers: {
            "Content-Type": 'application/json;charset=UTF-8',
            "authorization": "Barer " + token
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { id, name, avatar, description, category, height, weight, abilities, gender, type, weaknesses, stats, evolutions } = pokemonDetails
            if (id && name && avatar && description && category && height) {
                await axios
                    .post(url, pokemonDetails, options)
                    .then((res) => {
                        if (res.status === 200) {
                            alert(res.data.message);
                            navigate("/")
                            setPokemonDetails("")
                        } else {
                            alert(res.data.message)
                        }
                    }).catch((error) => {
                        alert(error.message);
                        console.log(error);
                    })
            } else {
                alert("Fields cannot be empty")
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="bg-dark text-light container-fluid col-12" style={{ width: "100%", height: "auto" }}>
            {/* <Navbar/> */}
            <div className="d-flex justify-content-between">
                <h1 className="m-4">Create Pokemon</h1>
                <button className="btn btn-danger m-4" onClick={() => { navigate("/") }}>Close</button>
            </div>
            <form onSubmit={handleSubmit} className="border border-5 p-4 col-12">
                <div className="d-flex flex-column justify-content-center align-items-center col-12" >
                    <h1 className="text-light">Create Pokemon</h1>
                    {/* <div className="d-flex justify-content-between">
                        <h1 className="m-4">Create Pokemon</h1>
                        <button className="btn btn-danger m-4" onClick={() => { navigate("/") }}>Close</button>
                    </div> */}
                    <div className="form-row d-flex flex-column justify-content-center align-items-center col-12">
                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon Id</label>
                            <input type="number"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Pokemon Id"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, id: e.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon Name</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Pokemon Name"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, name: e.target.value })}></input>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon Avatar</label>
                            <input type="url"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Pokemon Avatar"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, avatar: e.target.value })}></input>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Description</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Description"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, description: e.target.value })}></input>
                        </div>


                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Category</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Category"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, category: e.target.value })}></input>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Height</label>
                            <input type="number"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Height"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, height: e.target.value })}></input>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Weight</label>
                            <input type="number"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Weight"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, weight: e.target.value })}></input>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Abilities</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Abilities"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, abilities: e.target.value })}></input>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Gender</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Gender"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, gender: e.target.value })}></input>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Type</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Type"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, type: e.target.value.split(",") })}></input>
                            <div className="form-text text-light" id="basic-addon4">Write all Types seperating with commas ",".</div>
                        </div>

                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Weaknesses</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Weaknesses"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, weaknesses: e.target.value.split(",") })}></input>
                            <div className="form-text text-light" id="basic-addon4">Write all Types weaknesses with commas ",".</div>
                        </div>

                        {/* <label for="inputEmail4">Stats</label> */}
                        <div className="form-group col-md-6 m-2 border p-2"
                        // onChange={(e) => { setPokemonDetails(...pokemonDetails, pokemonStats) }}
                        >
                            <label for="inputEmail4">Stats - HP</label>
                            <input type="range"
                                min="1"
                                max="10"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Evoluations"
                                name="hp"
                                // value={pokemonDetails.stats.hp}
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, stats: [{ name: e.target.name, value: e.target.value }] })}
                            >
                            </input>
                            {/* <span>{pokemonDetails.stats}</span> */}

                        </div>


                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Evoluations</label>
                            <input type="text"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Evoluations"
                                onChange={(e) => setPokemonDetails({ ...pokemonDetails, evoluations: e.target.value.split(",") })}></input>
                            <div className="form-text text-light" id="basic-addon4">Write all evoluations seperating with commas ",".</div>
                        </div>

                        {/* <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Name" onChange={(e) => setPokemonDetails({ ...pokemonDetails, name: e.target.value })}></input> */}
                        {/* <div className="form-text text-light" id="basic-addon4">Example help text goes outside the input group.</div> */}
                        {/* </div> */}
                        {/* <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon Image URL</label>
                            <input type="url" className="form-control" id="inputEmail4" placeholder="URL" onChange={(e) => setPokemonDetails({ ...pokemonDetails, avatar: e.target.value })}></input>
                            
                        </div>
                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon weaknesses</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="weakness" onChange={(e) => setPokemonDetails({ ...pokemonDetails, weakness: e.target.value.split(",") })}></input>
                            <div className="form-text text-light" id="basic-addon4">Write all weaknesses seperating with commas ",".</div>
                        </div>
                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon strengths</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="strength" onChange={(e) => setPokemonDetails({ ...pokemonDetails, strength: e.target.value.split(",") })}></input>
                            <div className="form-text text-light" id="basic-addon4">Write all strength seperating with commas ",".</div>
                        </div>
                        <div className="form-group col-md-6 m-2 border p-2">
                            <label for="inputEmail4">Pokemon moves</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="moves" onChange={(e) => setPokemonDetails({ ...pokemonDetails, moves: e.target.value.split(",") })}></input>
                            <div className="form-text text-light" id="basic-addon4">Write all moves seperating with commas ",".</div>
                        </div> */}

                    </div>

                    <button type="submit" className="btn btn-primary m-2 w-50" onClick={handleSubmit}>Submit</button>


                </div>
            </form >
        </div >
    )
}

export default CreatePokemon;