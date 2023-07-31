import { useEffect, useRef, useState } from "react"
import { Table } from "../Table"
import { Spinner } from "../Spinner"
import './SearchFile.css'
import { useNavigate } from "react-router-dom"
import dayjs from "dayjs"
import { calculateAge } from "../Utils/CalculateAge"
export const SearchFile = () => {
    const [files, setFiles] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)   
    const formRef = useRef("")
    const navigate = useNavigate()

    const fetchSearch = async(e) => {  
        if(e && e.preventDefault()  ) {e.preventDefault()}   
        const body = {message: formRef.current.value}
        
            try {
                setLoading(true)
                let response = await fetch('/api/files/search', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {'Content-Type' : 'application/json'}
                })
                let data =  await response.json()
                setFiles(data)
                setLoading(false)
            } catch (error) {
                setError(error)
            }

    }
    

    useEffect(()=> {
        fetchSearch()
    },[])

    return (
        <div className="con">
            <h1>Create/Search Patient File</h1>
            <p>Search Patient file by name or patient Number</p>
            <div >
                <form className="search-button" onSubmit={fetchSearch}>  
                    <div className="form-div">
                        <div className="search-bar">
                            <input className="input-button" type="text" placeholder="search file" ref={formRef}/>                        
                            <button className="btn" type="submit" >submit</button>  
                            <button className="btn" onClick={()=> navigate('/create_file')}>Create</button> 
                        </div>           
                   </div>         
                </form>
            </div>
            <div>
                {
                    loading ? <Spinner /> : error ? <h1>Something went wrong</h1> : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Patient Number</th>
                                    <th>Patient Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Appointment Date</th>
                                    <th>Batch Number</th>
                                </tr>                                
                            </thead>
                            <tbody>
                                {
                                    files?.map((file) => (
                                        <tr key={file._id}>
                                            <td>{file.patientNumber}</td>
                                            <td>{file.patientName}</td>
                                            <td>{file.dateOfBirth ? calculateAge(file.dateOfBirth) : file.age}</td>
                                            <td>{file.gender}</td> 
                                            <td>{dayjs(file.appointmentDate).format('DD-MMMM-YYYY')}</td>                    
                                            <td>{file.viralLoad}</td>  
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>   
        </div>
       
    )
}