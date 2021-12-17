import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const CreateEmployeeComponent = () => {
    const ida= useParams();
    const [firstName,setFirstName]= useState("");
    const [lastName,setLastName]= useState("");
    const [emailId,setEmailId]= useState("");
    const [title,setTitle]=useState("");
    const history = useHistory();

    useEffect(()=>{
        console.log(ida);
        console.log(ida.id);
         if(ida.id === "_add"){
             setTitle("Add Employee");
             return
         }else{
        EmployeeService.getEmployeeById(ida.id).then((res)=>{
            
            setTitle("Update Employee");
            let employee = res.data;
            setFirstName(employee.firstName);
            setLastName(employee.lastName);
            setEmailId(employee.emailId);
            
        });
    }
    },[]);

    const changeFirstNameHandler = (event)=>{
        setFirstName(event.target.value);

    }
    const changeLastNameHandler = (event)=>{
        setLastName(event.target.value);

    }
    const changeEmailIdHandler = (event)=>{
        setEmailId(event.target.value);

    }
  
    const cancel = () =>{
         history.push('/employees');
    }
    const saveEmployee = (e) => {
         e.preventDefault();
         let employee = { firstName : firstName, lastName : lastName , emailId : emailId};
         console.log('employee => '+JSON.stringify(employee));
         if(ida.id === "_add"){
         EmployeeService.createEmployee(employee).then(res =>{
             history.push('/');
         });
        }else{
         EmployeeService.updateEmployee(ida.id,employee).then(res =>{

            history.push('/');
         });
        }
        }
    
    return (
        <div>
            <div className="container ">
                <div className="row">
                   <div className="card col-md-6 offset-md-3">
                       <h3 className="text-center">{title}</h3>
                       <div className="card-body">
                            <form>
                               <div className="form-group">
                                   <label>First Name :</label>
                                   <input placeholder="First Name" name="firstName" 
                                   className="form-control" value={firstName} onChange={changeFirstNameHandler}/>
                                </div>
                                <div className="form-group">
                                   <label>Last Name :</label>
                                   <input placeholder="Last Name" name="lastName" 
                                   className="form-control" value={lastName} onChange={changeLastNameHandler}/>
                                </div>
                                <div className="form-group">
                                   <label>Email Id :</label>
                                   <input placeholder="Email ID" name="emailId" 
                                   className="form-control" value={emailId} onChange={changeEmailIdHandler}/>
                                </div> 

                                <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel.bind(this)} style={{marginLeft: "10px"}}> Cancel</button>
                            </form>
                       </div>
                   </div>
                </div>
            </div>
        </div>
      );
}
 
export default CreateEmployeeComponent;