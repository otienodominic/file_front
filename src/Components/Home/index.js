import { useNavigate } from 'react-router-dom'
import './Home.css'

export function Home() {
    const navigate  = useNavigate()
    return(
        <div className='cover'>
            <h1>Kenyatta National Hospital</h1>
            <h2><p className='h2'>File Management System</p></h2>
            <p>Manage your file batches efficiently</p>
            <button className='btn' onClick={navigate('/login')}>Learn more</button>
        </div>
    )
}