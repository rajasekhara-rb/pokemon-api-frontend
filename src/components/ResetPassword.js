import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {
    const {token} = useParams()
    const [verifyToken, setVerifyToken] = useState("");
    const [passwords, setPassword] = useState({
        password: "",
        confirmPassword: ""
    })
    const navigate = useNavigate();

    const tokenVerification = async () => {
        try {
            await axios.get(`https://pokemon-api-of93.onrender.com/resetPassword/${token}`)
                .then((res) => {
                    // alert(res.data.message)
                    setVerifyToken(res.data.message)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        tokenVerification()
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { password, confirmPassword } = passwords;
        try {
            if (password === confirmPassword) {
                await axios.post(`https://pokemon-api-of93.onrender.com/newPassword/${token}`, passwords)
                    .then((res) => {
                        alert(res.data.message);
                    })
                navigate("/signin")
            } else {
                alert("password and confirm password are not matching");
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {verifyToken === "Token verified Successfully" ? (
                <form >
                    <div className="d-flex flex-column justify-content-center align-items-center col-12 bg-dark text-light" style={{ width: "100vw", height: "100vh" }}>
                        <h1 className="text-light">Reset your Password</h1>
                        <div className="form-row d-flex flex-column justify-content-center align-items-center container-fluid col-12">
                            <div className="form-group col-md-6 m-1">
                                <label for="inputPassword4">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword({ ...passwords, password: e.target.value })}></input>
                            </div>
                            <div className="form-group col-md-6 m-1">
                                <label for="inputPassword4">Confirm Password</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Confirm Password" onChange={(e) => setPassword({ ...passwords, confirmPassword: e.target.value })}></input>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-primary m-4 col-md-6" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            ) : (
                <div className="alert alert-danger">
                    {verifyToken}
                </div>
            )}

        </>
    )
}

export default ResetPassword;