import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePokemon() {
    const navigate = useNavigate();
    const [pokemonDetails, setPokemonDetails] = useState({});
    // {
    //     name: "",
    //     weakness: [],
    //     strength: [],
    //     moves: []
    // }

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
            const { name, weakness, strength, moves } = pokemonDetails
            if (name && weakness && strength && moves) {
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
                            <label for="inputEmail4">Pokemon Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Name" onChange={(e) => setPokemonDetails({ ...pokemonDetails, name: e.target.value })}></input>
                            {/* <div className="form-text text-light" id="basic-addon4">Example help text goes outside the input group.</div> */}
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
                        </div>

                    </div>

                    <button type="submit" className="btn btn-primary m-2 w-50" onClick={handleSubmit}>Submit</button>


                </div>
            </form>
        </div>
    )
}

export default CreatePokemon;