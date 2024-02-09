import { useState } from "react";
import Login from "./Login.js";
import Input from "../Components/Input.js";
function Register(){

    const [userData, setUserData] = useState({
        name: "",
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpass: ""
    })
    //for show password
    const [showPassword, setShowPassword] = useState(false);
    //  this field is required 
    // please enter a valid email
    //messages
    const [erros, setErrors] = useState({
        firstnameError : "",
        lastnameError: "",
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmpassError: ""
    })

    const [valid,setValid] = useState({
        names: true,
        firstname: true,
        lastname: true,
        username: true,
        email: true,
        password:true,
        confirmpass: true

    })
    const chageUserData = (e) => {
        var name=e.target.name
        console.log()
        if(name == "firstname"){
            const nameRegex = /^[a-zA-Z_]{3,}$/;
            setUserData({
                ...userData,
                firstname: e.target.value
            })
            setValid({
                ...valid,
                firstname: nameRegex.test(e.target.value)
            })
            setErrors({
                ...erros, 
                firstnameError: e.target.value.length == 0 ? "This Field Is Required" : e.target.value.length<3 ? "Enter at least three characters" : !valid.firstname && "please enter a valid name" 
            })
        }else if(name == "lastname"){
            const nameRegex = /^[a-zA-Z_]{3,}$/;
            setUserData({
                ...userData,
                lastname: e.target.value
            })
            setValid({
                ...valid,
                lastname: nameRegex.test(e.target.value)
            })
            setErrors({
                ...erros, 
                lastnameError: e.target.value.length == 0 ? "This Field Is Required" : e.target.value.length<3 ? "Enter at least three characters" : !valid.lastname && "please enter a valid name" 
            })
        }else if(name == "username"){
            const nameRegex = /^[a-zA-Z0-9_]{3,}$/;
            setUserData({
                ...userData,
                username: e.target.value
            })
            setValid({
                ...valid,
                username: nameRegex.test(e.target.value)
            })
            setErrors({
                ...erros, 
                usernameError: e.target.value.length == 0 ? "This Field Is Required" : e.target.value.length<3 ? "Enter at least three characters" : !valid.username && "please enter a valid name" 
            })
        }
        else if(name == "email"){
            const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
            setUserData({
                ...userData,
                email: e.target.value
            })

            setValid({
                ...valid,
                email: emailRegex.test(e.target.value)
            })

            setErrors({
                ...erros, 
                emailError: e.target.value.length == 0 ? "This Field Is Required" : !valid.email && "please enter a valid email" 
            })
        }
        else if(name == "password"){
            const passRegex = /[[\D]*.]{8,}/;
            setShowPassword((prev) => !prev)
            setUserData({
                ...userData,
                password: e.target.value
            })
            setValid({
                ...valid,
                password: passRegex.test(e.target.value)
            })
            
            setErrors({
                ...erros, 
                passwordError : e.target.value.length == 0 ? "This Field Is Required" : !valid.password && "please enter at least 8 characters containes special characters"
            })
        }else{
            setUserData({
                ...userData,
                confirmpass: e.target.value
            })
            
            
            setErrors({
                ...erros, 
                confirmpassError : e.target.value != userData.password && "Doen't match password" 
                        })
        }
    }

    const submitData = (e) => {
        if(!erros.emailError || !erros.passwordError || !erros.confirmpassError || !erros.firstnameError || !erros.lastnameError || !erros.usernameError ){
            e.preventDefault()
        }
    }

    
    return(
        <>
        
<section className="vh-100" style={{"backgroundColor": "black"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{"borderRadius": " 1rem"}}>
          <div className="row g-0">
            
            <div className="col d-flex align-items-center justify-content-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={(e) => submitData(e)} >
                  <h5 className=" fw-normal mb-3 pb-3 d-flex justify-content-center" style={{"letterSpacing": "1px"}}>Sign up to create account</h5>
                {/* name */}
                <div className="form-outline mb-4 d-flex  justify-content-between">
                  <div className=" col me-2">
                {/* first name */}
                
                    <Input type="text" name="firstname" label="First Name" value={userData.firstname} error={erros.firstnameError} onChange={(e) => chageUserData(e)} />
                     <p className="text-danger"> {erros.firstnameError}  </p> 
                     </div>
                {/* last name */}
                <div className="col ">
                    <Input type="text" name="lastname" label="Last name" value={userData.lastname} error={erros.lastnameError} onChange={(e) => chageUserData(e)} />
                    <p className="text-danger"> {erros.lastnameError}  </p> 
                  </div>
                  </div>

                {/* email */}
                  <div className="form-outline mb-4 ">
                    <Input type="text" name="email" label="Email address" value={userData.email} error={erros.emailError} onChange={(e) => chageUserData(e)} />
                     <p className="text-danger"> {erros.emailError}  </p> 
                  </div>

                {/* username */}
                  <div className="form-outline mb-4 ">
                    <Input type="text" name="username" label="Username" value={userData.username} error={erros.usernameError} onChange={(e) => chageUserData(e)} />
                     <p className="text-danger"> {erros.usernameError}  </p> 
                  </div>

                {/* password */}
                  <div className="form-outline mb-4">
                    <Input type={showPassword ? "text" : "password"} name="password" label="Password" value={userData.password} error={erros.passwordError} onChange={(e) => chageUserData(e)} />
                    {/* for show password */}
                     <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                     />
                    <label htmlFor="check">Show Password</label>

                    <p className="text-danger"> {erros.passwordError} </p>

                  </div>

                {/* confirm password */}
                  <div className="form-outline mb-4">
                    <Input type="password" name="confirmpass" label="Confirm password" value={userData.confirmpass} error={erros.confirmpassError} onChange={(e) => chageUserData(e)} />
                    <p className="text-danger"> {erros.confirmpassError} </p>
                  </div>
                  
                  <div className="pt-1 mb-4 d-flex justify-content-center">
                    <button className="btn btn-dark btn-lg btn-block" type="submit" 
                    disabled = {erros.emailError || erros.passwordError || erros.confirmpassError ||  erros.firstnameError || erros.lastnameError || erros.usernameError && "disabled"}
                    >Login</button>
                  </div>

                  <p className="mb-5 pb-lg-2" style={{"color": " #393f81"}}>Have already an account? <a href="/Login"
                      style={{"color": " #393f81"}}>login</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        </>
    
    )


}

export default Register;