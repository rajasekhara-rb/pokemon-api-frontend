import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnteredPassword: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (user.name && user.email && user.password && user.reEnteredPassword) {
                if (user.password !== user.reEnteredPassword) {
                    alert("Password is not matching");
                } else {
                    axios.post("https://pokemon-api-of93.onrender.com/api/v0/signup", user)
                        .then((res) => {
                            alert(res.data.message)
                        })
                    navigate("/signin");
                }
            } else {
                alert("Details cannot be empty")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-center align-items-center col-12 bg-dark text-light" style={{ width: "100vw", height: "100vh" }}>
                    <h1 className="text-light">Sign Up to Pokemon App</h1>
                    <div className="form-row d-flex flex-column justify-content-center align-items-center container-fluid col-12">
                        <div className="form-group col-md-6 m-1">
                            <label for="inputEmail4">Name</label>
                            <input type="text" className="form-control" id="inputEmail4" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6 m-1">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6 m-1">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6 m-1">
                            <label for="inputPassword4">Reenter Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Re-enter Password" onChange={(e) => setUser({ ...user, reEnteredPassword: e.target.value })}></input>
                        </div>
                    </div>
                    <div className="d-flex flex-row col-6">
                        <button type="submit" className="btn btn-primary m-2 w-50" onClick={handleSubmit}>Sign Up</button>
                        <button type="submit" className="btn btn-warning m-2 mt-2 w-50" onClick={() => { navigate("/signin") }}>Sign in</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default UserSignup;