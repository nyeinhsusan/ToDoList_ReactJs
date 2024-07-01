import { useState } from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Form = ({submitTask}) => {
const [userTask,setUserTask]= useState('');

// const submitTask=()=>{
// console.log(userTask);
// setUserTask("");
// }

const fromSubmitHandling = ()=>{
submitTask(userTask);
setUserTask('');
}

  return (
    <div>
    <h1 className="mb-4 text-center">To Do List</h1>
    <div className="row">
      <div className="col-6 offset-3">
        {/*  if you use useRef => you can write with input => Ref={userTask}*/}

        <input type="text" value={userTask} onChange={e=>setUserTask(e.target.value)} className="form-control" placeholder="Enter your Task....."/>
      </div>
      <div className="col-3">
        <button className="btn btn-success" type="button" onClick={()=>fromSubmitHandling()} ><i class="fa-solid fa-plus"></i>Add</button>
      </div>
    </div>
  </div>
  )
}

export default Form
