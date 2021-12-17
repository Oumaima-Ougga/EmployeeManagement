import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";


const ViewEmployeeComponent = () => {
    
    const ida = useParams();
    const [employee,setEmployee] = useState({firstName : "", lastName : "" , emailId : ""});
    
    useEffect(()=>{
      EmployeeService.getEmployeeById(ida.id).then(res=>{
          console.log(res.data);
        setEmployee( { firstName : res.data.firstName, lastName : res.data.lastName , emailId : res.data.emailId});
       console.log('employee => '+JSON.stringify(employee));
    
      })
    },[]);

    return ( 
        <div>
            <div className="card col-md-6 offset-md-3">
            <h2 className='text-center'> View Employee Details </h2>
               <div className="card-body">
                   <div className="row">
                    <label style={{color :'blueviolet'}}>Employee First Name :</label>
                    <div>{employee.firstName}</div>
                    <label style={{color:'blueviolet'}}>Employee Last Name :</label>
                    <div> {employee.lastName}</div>
                    <label style={{color:'blueviolet'}}>Employee Email ID :</label>
                    <div> {employee.emailId}</div>

                   </div>
               </div>
            </div>
        </div>
     );
}
 
export default ViewEmployeeComponent;