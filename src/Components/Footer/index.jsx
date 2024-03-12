import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Footer = () => {
  const v = useContext(AuthContext)
  
  return (
    
    <div style={{backgroundColor : 'teal' }}>
        <span style={{marginRight : 20}}>Logo</span>
        <span style={{marginRight : 20}}>Signed as {v.email}</span>
    </div>
  )
}

export default Footer