import { useState } from 'react';
import './App.css'
import Button from './components/button';
import List from './components/List';
import Addthing from './components/Addthing';

const list = [
  {
    context:"breath",
    isFinished:true,
    date:2025-9-18
  },
  {
    context:"eat breakfast",
    isFinished:false,
    date:2025-9-18
  }
];


function App(){
  const [showAdd,setShowAdd] = useState(false);
  // 实现添加的输入框的显示
  function handleShowAdd(){
    setShowAdd(true);
  }
  const [todo,setTodo] = useState(list);
  const [formData,setFormData] = useState({
    context:"",
    isFinished: false,
    date:""
  })
  function handleContext(e){
    setFormData({
      ...formData,
      context:e.target.value
    })
  }
  function handleDate(e){
    setFormData({
      ...formData,
      date:e.target.value
    })
  }
  function handleChange(e){
    e.preventDefault();
    setTodo([
      ...todo,
      formData
    ]);
    setFormData({context:"",isFinished: false,date:""})
    console.log(formData);
  }
  return (
    <>
      <h1 >fengnuan`ToDoList</h1>
      <Button onClick={handleShowAdd} children={"Add"} classname={"bg-blue-500"}></Button>
      {showAdd&&<Addthing handleChange={handleChange} context={handleContext} date={handleDate} value={formData} classname="bg-blue-500"/>}
      <hr />
      <List list={todo}/>
    </>
  )
}
export default App;