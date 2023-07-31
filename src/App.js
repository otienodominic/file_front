import { Routes, Route }  from 'react-router-dom'
import { Login } from './Components/Login'
import { NavBar } from './Components/NavBar'
import { Dashboard } from './Components/Dashboard'
import { UserProvider } from './Components/Utils/UserContext'
import { Home } from './Components/Home'
import './App.css'
import { AddFile } from './Components/AddFile'
import { SearchFile } from './Components/SearchFile/Index'

function App() { 
  return(  
   <UserProvider>
    <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/create_file' element={<AddFile />} />
          <Route path='/files' element={<SearchFile />} />
          {/* <Route path='/files' element={ <ProtectedRoute><Files /></ProtectedRoute> } /> */}
        </Routes>
   </UserProvider>  
    
  )
}
export default App

