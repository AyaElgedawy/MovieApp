import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function ToDoList(){
    const [taskInput, setTaskInput] = useState('');
    const [showList, setShowList] = useState([])

    const chageTask = (e) =>{
        setTaskInput(e.target.value)
    }
    const clickAdd = () => {
        const newTask = {
            id : Date.now(),
            text: taskInput,
            completed: false
        }
        if(taskInput){
            setShowList([...showList,newTask])
            setTaskInput("")   
        }     
    }
    const deleteTask = (id) => {
        // const updatedParagraphs = [...showList];
        // updatedParagraphs.splice(index, 1);
        //const updatedParagraphs = 
        setShowList(showList.filter((task) => task.id !== id));
        // setTask({...task,delete: true})
    }

    return(
        <>

     <div className="content container d-flex justify-content-center d-column" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Todo list</h4>
                        <div className="add-items d-flex"> <input name="AddInput" type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" onChange={(e) => chageTask(e)} value={taskInput}/> <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={clickAdd}>Add</button> </div>
                        <div className="list-wrapper">
                            <ul className="d-flex flex-column todo-list">
                                {showList.map((task) => (
                                        <li className="">
                                        <div className="form-check"> <label className="form-check-label"> <input className="checkbox" type="checkbox" /> {task.text} <i className="input-helper" ></i></label> <span className="float-end" onClick={() => deleteTask(task.id)}> <FontAwesomeIcon icon={faTrash}  /> </span></div> 
                                    </li>
                                ))}
                                
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
 </>
    
    )


}

export default ToDoList;