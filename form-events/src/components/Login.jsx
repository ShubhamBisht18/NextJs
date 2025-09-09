"use client"
import { useState } from "react"

const Login = () =>{
    const [email, setEamil] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({email,password})
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={email} onChange={(e)=> setEamil(e.target.value)} placeholder="Enter Email" autoComplete="email"/>
                </div>
                <div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" autoComplete="current-password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login