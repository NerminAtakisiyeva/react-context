import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Header = () => {
  const v = useContext(AuthContext)

  return (
    <div style={{backgroundColor : 'peru' }}>
        <span style={{marginRight : 20}}>Logo</span>
        <span style={{marginRight : 20}}>Signed as {v.email}</span>
        <span style={{marginRight : 20}}>I know, you are {v.token}</span>
    </div>
  )
}

export default Header