import { useState } from "react";
function Login(){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    //for show password
    const [showPassword, setShowPassword] = useState(false);
    //  this field is required 
    // please enter a valid email
    //messages
    const [erros, setErrors] = useState({
        emailError: "",
        passwordError: ""
    })

    const [valid,setValid] = useState({
        email: true,
        password:true

    })
    const chageUserData = (e) => {
        
        console.log()
        if(e.target.name == "email"){
            const emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-zA-Z]+$/;
            setValid({
                ...valid,
                email: emailRegex.test(e.target.value)
            })

            setUserData({
                ...userData,
                email: e.target.value
            })
            setErrors({
                ...erros, 
                emailError: e.target.value.length == 0 ? "This Field Is Required" : !valid.email && "please enter a valid email" 
            })
        }else{
            const passRegex = /[\D]*.{8,}/;
            setShowPassword((prev) => !prev)
            setValid({
                ...valid,
                password: passRegex.test(e.target.value)
            })
            setUserData({
                ...userData,
                password: e.target.value
            })
            setErrors({
                ...erros, 
                passwordError : e.target.value.length == 0 ? "This Field Is Required" : !valid.password && "please enter at least 8 characters containes special characters"
            })
        }
    }

    const submitData = (e) => {
        if(!erros.emailError || !erros.passwordError){
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
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img2.webp"
                alt="login form" className="img-fluid" style={{"borderRadius": " 1rem 0 0 1rem"}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={(e) => submitData(e)}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{"color": " #ff6219"}}/>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{"letterSpacing": "1px"}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                  <label className={`form-label `} htmlFor="form2Example17">Email address</label>

                    <input type="email" id="form2Example17" className={`form-control form-control-lg ${erros.emailError ? "border-danger" : "border-warning"}`} 
                    value={userData.name}
                    onChange={(e) => chageUserData(e)}
                    name = "email"/>
                     <p className="text-danger"> {erros.emailError}  </p> 

                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example27">Password</label>
                    <input type={
                        showPassword ? "text" : "password"
                    }
                     id="form2Example27" 
                     className={`form-control form-control-lg ${erros.passwordError ? "border-danger" : "border-warning"}`}
                    value={userData.password}
                    onChange={(e) => chageUserData(e)}
                    name="password"
                     />
                    {/* for show password */}
                     <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                     />
                    <label for="check">Show Password</label>

                    <p className="text-danger"> {erros.passwordError} </p>

                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit" 
                    disabled = {erros.emailError || erros.passwordError && "disabled"}
                    >Login</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{"color": " #393f81"}}>Don't have an account? <a href="/Register"
                      style={{"color": " #393f81"}}>Register here</a></p>
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

export default Login;