import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Header from './Header';

function Register (){

    useEffect(() =>{
        if(localStorage.getItem('user-info'))
        {
            navigate("/add")
        }
    }, [])

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    async function signUp()
    {
        let item = {name, password, email}
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/register", {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        result = await result.json();
        //console.warn('result',result)
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate("/add")
    }

    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3">
            <h1>Register Page</h1>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" placeholder="name"/> <br/>
            <input type="email"  onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="email"/> <br/>
            <input type="password"  onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="password"/> <br/>
            <button onClick={signUp} className="btn btn-primary">Sign up</button>
        </div>
        </>
    )
}

export default Register;