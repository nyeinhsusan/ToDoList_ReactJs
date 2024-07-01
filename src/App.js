import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { api } from "./Api/ApiResource";
import uuid from "react-uuid";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const res = await api.get("/todolist")
    setTasks(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [tasks]);

  //for post method 
  const submitTask = async (userTask) => {
    //console.log(userTask);
    const data = {
      id: uuid(),
      "task": userTask,
      "complete": false
    };
    await api.post('/todolist', data);
  }


  //for delete 
  const deleteTask = async (task_id) => {
    //console.log(task_id);
    await api.delete(`/todolist/${task_id}`)
  }

  //for update
  const updateTask = async(task_id,complete)=>{
    //console.log(task_id,complete_task);
    await api.patch(`/todolist/${task_id}`,{complete});
  }

  return (
    <div className="mx-auto w-50 mt-5">
      <Form submitTask={submitTask} />
      <List tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  );
};

export default App;
