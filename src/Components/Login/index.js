import { useRef, useContext } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import UserContext from '../Utils/UserContext'



export function Login() { 
    let api = process.env.REACT_APP_API_URL   
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault();

        const person = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        
        
    
        try {
            let response = await fetch(api + '/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(person),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  }
            })
            let ans = await response.json()               
            // localStorage.setItem('userProfile', JSON.stringify(ans))      
            setUser(ans) 
            navigate('/files')          
            
        }catch(error){
            alert(error)
            
        }    
   }    
    return(
        <div className='holder'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='email' className='input-box' placeholder='Enter Email' name='email' ref={emailRef} required/>
                    <i className='bx bxs-user'></i>
                </div>
                <div className='input-box'>
                    <input type='password' className='input-box' placeholder='Enter Password' name='password' ref={passwordRef} required />
                    <i className='bx bxs-lock-alt' ></i>
                </div>
                <div className='parna'>                    
                        {/* <input type='checkbox' id='checkbox' /> */}
                                             
                        <p>Remember Me</p>                   
                </div>
                <button type='submit' className='btn'>Login</button>                
                <div className='forgot'>
                    <a href='#'>Forgot Password?</a>
                </div>                
                <div className='register-link'>
                    <di><p>Don't have an account?</p></di>
                    <div><a href='#'>Register</a></div>
                </div>
            </form>    
        </div>
    )
}