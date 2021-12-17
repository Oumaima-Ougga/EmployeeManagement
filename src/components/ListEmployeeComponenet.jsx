 import React, { useEffect, useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useHistory } from 'react-router-dom';

 function ListEmployeeComponenet() {
      
    const [employees, setEmployees] = useState([]);
     const history = useHistory();
            
    useEffect (() =>{
        EmployeeService.getEmployees().then((res)=>{
             setEmployees(res.data);
        });
    });

    const addEmployee = () =>{
        history.push('add-employee/_add');
    }
    const editEmployee = (id) =>{
        history.push('add-employee/'+id);
    }
    const deleteEmployee = (id) =>{
        EmployeeService.deleteEmployee(id).then(res=>{
            setEmployees(employees.filter(employee => employee.id !== id));
        });
        
    }
    const viewEmployee = (id) =>{
        history.push('/view-employee/'+id);
    }

         return (
             <div>
                <h2 className='text-center'>Employees List</h2> 
                <div className='row'>
                   <button className='btn btn-primary' style ={ {width:"fit-content" , marginBottom:'20px'}} onClick={addEmployee}>Add Employee</button>
                </div>
                <div className='row'>
                     <table className='table table-striped table-bordered'>
                         <thead>
                             <tr>
                                 <th> Employee First Name</th>
                                 <th> Employee Last Name</th>
                                 <th> Employee Email</th>
                                 <th> Actions</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 employees.map(
                                     employee =>(
                                           <tr key={employee.id}>
                                              <td>{employee.firstName}</td>
                                              <td>{employee.lastName}</td>
                                              <td>{employee.emailId}</td>
                                              <td>
                                                  <button className='btn btn-info' style={{marginLeft:'20px'}} onClick={()=> editEmployee(employee.id)}>
                                                      Update
                                                  </button>
                                                  <button className='btn btn-info' style={{marginLeft:'20px'}} onClick={()=> viewEmployee(employee.id)}>
                                                      View
                                                  </button>
                                                  <button className='btn btn-danger' style={{marginLeft:'20px'}} onClick={()=> deleteEmployee(employee.id)}>
                                                      Delete
                                                  </button>
                                              </td>
                                           </tr>
                                     )
                                 )
                             }
                         </tbody>
                     </table>
                </div>
             </div>
         );
     }
 
 export default ListEmployeeComponenet;