import { useContext, useEffect, useRef, useState } from "react"
import UserContext from "../Utils/UserContext"
import { Spinner } from "../Spinner"
import dayjs from 'dayjs'
import './dashboard.css'
// https://www.youtube.com/watch?v=MY6ZZIn93V8  Implemetn a search
export function Dashboard() {
    const [user] = useContext(UserContext)   
   
    
    return(
        <div class="card">
            {/* <img src="img.jpg" alt="John" style="width:100%" /> */}
            <h1>{user.name}</h1>
            <p class="title">{user.admin ? 'Administrator' : 'Normal User'}</p>
            <p>Date Created:  {dayjs(user.createdAt).format('DD-MMMM-YYYY')}</p>
            <p>Kenyatta National Hospital</p>            
            <p className="tton"><button id="mailman">Email: {user.email}</button></p>
        </div>
    )
}