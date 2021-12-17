import { useState } from "react";
import { useHistory } from "react-router-dom";

const FormEmployee = (saveEmployee) => {

    const [firstName,setFirstName]= useState("");
    const [lastName,setLastName]= useState("");
    const [emailId,setEmailId]= useState("");
    const history = useHistory();
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
    return (
        <div>
            
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
              
      );
}
 
export default FormEmployee;