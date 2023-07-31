import { useContext } from 'react'
import './Nav.css'
import UserContext from '../Utils/UserContext'
import { useNavigate } from 'react-router-dom'

export function NavBar() {
  const [user, setUser, logout] = useContext(UserContext) 
  const navigate = useNavigate()
  
  return(    
  <div className='wrapper'>
    <nav class="navbar"> 
      <div className='logo'>
        <div id='logo-img'>
          <a href='/'><img src="https://healthsciences.uonbi.ac.ke/sites/default/files/2021-04/KNH%20logo.png" width="60px" height="60px" alt="KNH Logo"/> </a>
        </div>
        <div id='logo-text'>
          <p>File Management System</p>
        </div>
      </div>
      <div className='navlinks'>
     {
      user && (
        <ul class="nav-links"> 
        
        <div className="menu">          
          <li><a href="/">Home</a></li>
          <li><a href="/files">Files</a></li>
          <li><a href="/dashboard">Dashboard</a></li>  
          <input type="checkbox" id="checkbox_toggle" />         
         <label for="checkbox_toggle" className="hamburger">&#9776;</label>    
        </div>
     </ul>
      )
     }
     <div className='nav-end'>
        <div className='right-container'>  
          <div>
            {user && <i class='bx bx-user-plus bx-sm bx-border' onClick={()=> navigate('/create_file')} ></i>}
          </div>       
          <div>
            {user && <i class='bx bxs-log-in-circle bx-sm bx-border bx-fade-right-hover' onClick={logout} ></i>} 
          </div>
          <div>
            {!user && <button className="btn btn-primary" id='login' onClick={()=> {navigate('/login')}}>Login</button>} 
          </div>
          
                  
        </div>
      </div>
        
      </div>

  </nav>

</div>
  )
}