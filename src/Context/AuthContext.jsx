import axios from "axios"
import { createContext, useEffect, useState } from "react"

// const data = {
//   email: "nermin@gmail.com",
//   token: 'tk_123wew34r893'
// }

export const AuthContext = createContext({})

const AuthContextProvider = ({children}) => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        const _data = {
          email: res.data.email,
          token: res.data.username
        }
        setData(_data)
      })
  }, [])

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider