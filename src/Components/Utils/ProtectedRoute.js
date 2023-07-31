import { useContext } from "react"
import UserContext from "./UserContext"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const [user] = useContext(UserContext)
    const navigate = useNavigate()
    if(user){
        return children
    }
    return navigate('/login')

}

export default ProtectedRoute   