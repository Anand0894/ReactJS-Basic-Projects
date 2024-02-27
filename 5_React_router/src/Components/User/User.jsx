import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {UserId} = useParams();
  return (
    <div>User : {UserId}</div>
  )
}
