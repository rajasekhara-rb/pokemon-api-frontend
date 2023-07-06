import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserSignin({ loggedIn, setLoggedIn }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    // const handleChange = (e)=>{
    // e
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const { email, password } = loggedIn;
        try {
            // if (email && password) {
                await axios.post("http://localhost:4500/api/v0/signin", user)
                    .then((res) => {
                        if (res.status === 200) {
                            setLoggedIn(res.data.token);
                            localStorage.setItem("jwt-token", res.data.token);
                            alert(res.data.message);
                            navigate("/")
                        } else {
                            alert(res.data.message);
                        }
                    })
            // } else {
            //     alert("Credentials cannot be empty");
            // }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column justify-content-center align-items-center col-12 bg-dark text-light" style={{ width: "100vw", height: "100vh" }}>
                    <h1 className="text-light">Sign In to Pokemon App</h1>
                    <div className="form-row d-flex flex-column justify-content-center align-items-center container-fluid col-12">
                        <div className="form-group col-md-6 m-1">
                            <label for="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
                        </div>
                        <div className="form-group col-md-6 m-1">
                            <label for="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary m-4 col-md-6" onClick={handleSubmit}>Sign in</button>
                    <div className="d-flex flex-row justify-content-between col-6 text-light">
                        <a href="/forgotpassword" className="m-2 mt-0 text-light" >Forgot Password ?</a>
                        <a href="/signup" className="m-2 mt-0 text-light">New user ? Sign Up</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default UserSignin;