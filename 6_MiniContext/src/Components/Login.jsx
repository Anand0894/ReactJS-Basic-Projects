import React, { useContext } from 'react'
import { useState  } from 'react'
import UserContext from '../Context/UserContext'

export default function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=> {
          e.preventDefault()
          setUser({username , password})
    }
  return (
    <div>
    <h2>Login</h2>
    <input type="text" 
           value={username}
           placeholder='username'
           onChange={(e)=> setusername(e.target.value)}   
    />
    <input type="Password" 
           value={password}
           placeholder='password'
           onChange={(e)=> setpassword(e.target.value)}
    />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
