import React from "react";

function Input(props){

    return(
        <>
            <label className="form-label" htmlFor={props.name}>{props.label}</label>
                    <input type={props.type} 
                    id={props.name}  
                    value={props.value}
                    className={`form-control form-control-lg ${props.error ? "border-danger" : "border-warning"}`}
                   // onChange={(e) => chageUserData(e)}
                   onChange={props.onChange}
                    name = {props.name}/>
        </>
    )
}

export default Input