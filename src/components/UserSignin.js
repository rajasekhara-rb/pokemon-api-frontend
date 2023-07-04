import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignin() {
    const navigate = useNavigate();
    const handleSubmit = () => {

    }

    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: ""
    });
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-center align-items-center col-12 bg-dark text-light" style={{ width: "100vw", height: "100vh" }}>
                    <h1 className="text-light">Sign In to Pokemon App</h1>
                    <div className="form-row d-flex flex-column justify-content-center align-items-center container-fluid col-12">
                        <div className="form-group col-md-6 m-1">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setDetails({ ...details, username: e.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6 m-1">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setDetails({ ...details, password: e.target.value })}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-4 col-md-6" onClick={handleSubmit}>Sign in</button>
                    <div className="d-flex flex-row justify-content-between col-6 text-light">
                        <a href="/" className="m-2 mt-0 text-light" onClick={()=>{navigate("/")}}>Forgot Password ?</a>
                        <a href="/" className="m-2 mt-0 text-light" onClick={()=>{navigate("/")}}>New user ? Sign Up</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default UserSignin;