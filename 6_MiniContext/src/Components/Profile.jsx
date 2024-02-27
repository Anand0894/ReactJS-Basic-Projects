import { useContext } from 'react'
import React from 'react'
import UserContext from '../Context/UserContext'

export default function Profile() {
    const {User} = useContext(UserContext)
  
     if(!User) return <h1>Plz Login</h1>
     return <div>welcom {User.username}</div>

  
}
