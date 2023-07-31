import { useContext, useEffect } from 'react'
import { calculateAge } from '../Utils/CalculateAge'

import './Table.css'
import dayjs from 'dayjs'
import UserContext from '../Utils/UserContext'



export const Table = ({results}) => {   
   
    return (
        <div>
            <table>
            <thead>                
                <tr>
                    <th>Patient Number</th>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Appointment Date</th>
                    <th>Batch Number</th> 
                    {/* <th>Created By</th>  */}
                </tr>
            </thead>
            <tbody>
               {
                results?.map((file) => (
                    <tr key={file._id}>
                    <td>{file.patientNumber}</td>
                    <td>{file.patientName}</td>
                    {/* <td>{calculateAge(file.dateOfBirth)}</td> */}
                    <td>{file.dateOfBirth ? calculateAge(file.dateOfBirth) : file.age}</td>
                    <td>{file.gender}</td> 
                    <td>{dayjs(file.appointmentDate).format('DD-MMMM-YYYY')}</td>                    
                    <td>{file.viralLoad}</td>                    
                    {/* <td>{file.creator}</td>                     */}
                    </tr>
                ))
                
               }
            </tbody>
           </table>
        </div>
    )
}