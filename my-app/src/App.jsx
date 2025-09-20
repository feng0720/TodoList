import { useEffect, useState } from 'react';
import './App.css'
import Button from './components/button';
import List from './components/List';
import Addthing from './components/Addthing';

const list = [
  {
    context:"breath",
    isFinished:true,
    date:"2025-9-18"
  },
  {
    context:"eat breakfast",
    isFinished:false,
    date:"2025-9-18"
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
    // 阻止默认内容防止自动刷新
    e.preventDefault();
    // 如果没有输入内容需要提醒
    if(!formData.context.trim()){
      alert("请输入内容");
      return;
    }
    // 如果没输入时间就默认今天
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth()+1).padStart(2,'0'); // 保持格式保证都是两位 padStart(targetLength,"string")如果一个字符串的长度小于targetLength会在他的前面添加string直到等于targetLength
    // const week = String(now.getDay()).padStart(2,'0'); // 这里的getDay是获得一个星期的第几天即星期几
    const day = String(now.getDate()).padStart(2,'0'); // 获取今天是几号
    const thedate = `${year}-${month}-${day}`;
    // 这里需要新建一个项目存储因为setTodo是异步的用这个去更新保证formData和todo是同步更新的    
    const itemdate = {
      ...formData,
      date:formData.date.trim()?formData.date:thedate
    }
    setTodo([
      ...todo,
      itemdate
    ]);
    setFormData({context:"",isFinished: false,date:""});
  }
  function handleRemove(key){
    setTodo(todo.filter(el=>el.context!==key));
  }
  const [name,setName] = useState("");
  const [show,setShow] = useState(false);
  const handleName = (e)=>{
    e.preventDefault();
    setName(e.target.value);
  }
  const handleShow = ()=>{
    name?setShow(true):null;
  }
  return (
    <>
      {!show&&<div>
        <input type="text" className='border-white border-2' placeholder='请输入用户名字' onChange={handleName}/>
        <button className='block m-auto mt-4 border-solid bg-white text-black rounded-lg p-2' onClick={handleShow}>confirm</button>
      </div>}
      {show&&<div>
        <h1 className='text-3xl font-1000 text-blue-300 '>{name.toUpperCase()}`ToDoList</h1>
        <Button onClick={handleShowAdd} children={"Add"} classname={"bg-blue-500 mt-4 mb-4"}></Button>
        {showAdd&&<Addthing handleChange={handleChange} context={handleContext} date={handleDate} value={formData} classname="bg-blue-500"/>}
        <hr />
        <List list={todo} remove={handleRemove}/>
      </div>}
    </>
  )
}
export default App;