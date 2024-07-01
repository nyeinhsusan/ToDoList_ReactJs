import React from "react";
import { FaXmark } from "react-icons/fa6";
const Card = ({ tasks , deleteTask,updateTask}) => {
 // console.log(tasks);

  // const deleteTask=(task_id)=> {
  //   console.log(task_id);
  // }

  const HandleDeleteTask=(id)=>{
  if(window.confirm("Are You Sure?")){
    deleteTask(id);
  }     
  }

  return (
    <div>
     {tasks.map((task)=> (
      // <div key={task.id} className="list-group-item w-100 mt-3 shadow-sm-3">
         <div key={task.id} className={task.complete ? "list-group-item w-100 mt-3 shadow-sm-3 shadow-sm bg-success text-decoration-line-through text-white":"list-group-item w-100 mt-3 shadow-sm-3"}> 
        <div className="row">
          <div className="col-9 offset-1 m">
            <input type="checkbox" className="me-2" onClick={()=>updateTask(task.id,!task.complete)} checked={task.complete == true }/>
         {task.task}
          </div>
          <div className="col-2">
            {/* <i className="fa-solid fa-trash"></i> */}
            <FaXmark onClick={()=>HandleDeleteTask(task.id)} />
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Card;
