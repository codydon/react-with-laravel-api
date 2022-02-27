import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'

function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    useEffect(() =>{
        if(localStorage.getItem('user-info'))
        {
            navigate("/add")
        }
    }, [])

    async function login(){
        console.warn(email, password)
        let item={email, password}
        let result = await fetch("http://localhost:8000/api/login", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        result = await result.json();
        console.warn('LOGIN result',result)
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add")
    }

    return(
        <div>
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="email" onChange={(e) =>setEmail(e.target.value)} placeholder="email" className="form-control"/>
                <br />
                <input type="password" onChange={(e) =>setPassword(e.target.value)} placeholder="password" className="form-control"/>
                <br />
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}

export default Login;