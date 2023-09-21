import {createContext, useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const navigate = useNavigate()
    // const [user, setUser] = useState(()=>{
    //     let userProfile = localStorage.getItem('userProfile')
    //     if(userProfile){
    //         return JSON.parse(userProfile)
    //     }
    //     return null
    // })
    const [user, setUser] = useState(null)
    const logout = async() => {
        await fetch('https://filebackend-3e82d3066410.herokuapp.com/api/auth/logout')
        // localStorage.removeItem('userProfile')
        setUser(null)
        navigate('/')
    }
    // const CreatedBy = async(user_id) => {
    //     // req.params.id
    //     try {
    //         let response = await fetch(`/api/users/${user_id}`)
    //         let user = await response.json()        
    //         return user.name
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    return(
        <UserContext.Provider value={{user, setUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext