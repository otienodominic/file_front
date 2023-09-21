import { useNavigate } from 'react-router-dom'
import './AddFile.css'
import { useRef } from 'react'


export const AddFile = () => {
    const navigate = useNavigate()
    const numbRef = useRef()
    const nameRef = useRef()
    const phoneRef = useRef()
    const dobRef = useRef()
    const sexRef = useRef()
    const batchRef = useRef()
    const appointRef = useRef()

    const handleSubmit = async(e) => {
        e.preventDefault();
        let formData = {
            patientNumber:numbRef.current.value ,
            patientName:nameRef.current.value ,
            phoneNumber: phoneRef.current.value ,
            dateOfBirth:dobRef.current.value ,
            gender: sexRef.current.value ,
            viralLoad:batchRef.current.value ,
            appointmentDate: appointRef.current.value
        }
        try {
            await fetch('/api/files/create', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {'Content-Type' : 'application/json'}
            }) 
            navigate('/dashboard')           
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='main'>  
            <h1>Add File</h1>          
            <form className='add-file' onSubmit={handleSubmit}>               
                <div className='firDiv'>
                    <div className='form-group'>
                        <label className='input-label' for="number">Patient Number</label>                        
                        <input className='input-button' id="number" type="text" ref={numbRef} required />                        
                    </div>
                    <div className='form-group'>
                        <label className='input-label' for="name">Patient Name</label>                       
                        <input className='input-button' id="name" type="text" ref={nameRef} required />                        
                    </div>
                    <div className='form-group'>
                        <label className='input-label' for="phone">Phone Number</label>                       
                        <input className='input-button' id="phone" type="text" ref={phoneRef} required />                                           
                    </div>
                    <div className='form-group'>
                        <label className='input-label' for="date">Date of Birth</label>                        
                        <input className='input-button' id="date" type="date" ref={dobRef} required />                       
                    </div>
                    <div className='form-group'>
                        <label className='input-label'  for="sex">Sex</label>
                        <input className='input-button' id="sex" type="text" ref={sexRef} required />                     
                    </div>
                    <div className='form-group'>
                        <label className='input-label' for="batch">Batch Number</label>                       
                        <input className='input-button' id="batch" type="text" ref={batchRef} required />                       
                    </div>
                    <div className='form-group'>
                        <label className='input-label' for="appointment">Date of Appointment</label>                        
                        <input className='input-button' id="appointment" type="date" ref={appointRef} required />              
                    </div>
                </div>
                <div id='second' className='secDiv'>
                    <button className='btn' id="appointments" type="submit">Create</button> 
                    {/* <button className='btn' id="clear" type="submit">Clear Form</button>  */}
                    <button className='btn' id="cancel" onClick={()=> navigate('/files')}>Cancel</button>            
               
                </div>                
            </form>           
        </div>
    )
}