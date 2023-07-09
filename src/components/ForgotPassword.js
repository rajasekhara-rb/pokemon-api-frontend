import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            axios.post("https://pokemon-api-of93.onrender.com/resetPassword", {email:email})
                .then((res) => {
                    alert(res.data.message)
                })
                navigate("/signin")
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            <form >
                <div className="d-flex flex-column justify-content-center align-items-center col-12 bg-dark text-light" style={{ width: "100vw", height: "100vh" }}>
                    <h1 className="text-light">Forgot Password ?</h1>
                    <div className="form-row d-flex flex-column justify-content-center align-items-center container-fluid col-12">
                        <div className="form-group col-md-6 m-1">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Enter your user email" onChange={(e) => setEmail(e.target.value)}></input>
                        </div>

                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary m-4 col-md-6">Forgot Password Submit</button>
                </div>
            </form>
        </>
    )
}

export default ForgotPassword;