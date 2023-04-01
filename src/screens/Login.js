import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate=useNavigate();
  const[credentials, setCredentials] = useState({email:"",password:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:5000/api/loginUser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:credentials.email,
                password:credentials.password
            })
        })
            const json=await response.json();
            console.log(json);
            if(!json.success){
                alert("Invalid data");
            }
            if(json.success){
              localStorage.setItem("userEmail",credentials.email);
              localStorage.setItem("authToken",json.authToken);
              // console.log(localStorage.getItem("userEmail"));
              navigate("/");
            }
        
    }
    const handleChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={handleChange}/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credentials.password} onChange={handleChange}/>
                </div>
               
                <button type="submit" className="m-3 btn btn-primary">Submit</button>
                <Link to='/SignUp' className="m-3 btn btn-danger">Sign Up</Link>
            </form>
    </div>
  )
}
