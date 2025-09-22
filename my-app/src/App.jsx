import { useEffect, useState } from 'react';
import './App.css'
import Button from './components/button';
import List from './components/List';
import Addthing from './components/Addthing';

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth()+1).padStart(2,'0'); // 保持格式保证都是两位 padStart(targetLength,"string"果一个字符串的长度小于targetLength会在他的前面添加string直到等于targetLength
// const week = String(now.getDay()).padStart(2,'0'); // 这里的getDay是获得一个星期的第几天即星期几
const day = String(now.getDate()).padStart(2,'0'); // 获取今天是几号
const today = `${year}-${month}-${day}`;


function App(){
  const [list,setList] = useState([
  {
    context:"呼吸",
    isFinished:true,
    date: today
  },
  {
    context:"吃早饭",
    isFinished:false,
    date: today
  }]
)

  const [showAdd,setShowAdd] = useState(false);
  // 实现添加的输入框的显示
  function handleShowAdd(){
    setShowAdd(true);
  }
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
    // 这里需要新建一个项目存储因为setList是异步的用这个去更新保证formData和list是同步更新的    
    const itemdate = {
      ...formData,
      date:formData.date.trim()?formData.date:today
    }
    setList([
      ...list,
      itemdate
    ]);
    setFormData({context:"",isFinished: false,date:""});
  }
  // 实现删除项目
  function handleRemove(key){
    setList(list.filter(el=>el.context!==key));
  }
  // 实现简单的用户登录
  const [name,setName] = useState("");
  const [show,setShow] = useState(false);
  const handleName = (e)=>{
    e.preventDefault();
    setName(e.target.value);
  }
  const handleShow = ()=>{
    name?setShow(true):null; // 只有输入用户名才显示项目
  }

  const handleToggle = (context)=>{
    setList(prev=>
      prev.map(item=>item.context===context?{...item,isFinished:!item.isFinished}:item)
    )
  }

  return (
    <>
      {!show&&<div>
        <input type="text" className='border-white border-2' placeholder='请输入用户名字' onChange={handleName} onKeyDown={(event)=>{ // 按下enter也可以confirm和按钮功能一样
          if(event.key==="Enter"){
            handleShow();
          }
        }}/>
        <button className='block m-auto mt-4 border-solid bg-white text-black rounded-lg p-2' onClick={handleShow}>confirm</button>
      </div>}
      {show&&<div>
        <h1 className='text-3xl font-1000 text-blue-300'>{name.toUpperCase()}`listList</h1>
        <Button onClick={handleShowAdd} children={"Add"} classname={"bg-blue-500 mt-4 mb-4"}></Button>
        {showAdd&&<Addthing handleChange={handleChange} context={handleContext} date={handleDate} value={formData} classname="bg-blue-500"/>}
        <h2 className='mb-4 text-green-200 text-lg'>The number of your things is {list.length}</h2>
        <hr />
        <List list={list} remove={handleRemove} toggle={handleToggle}/>
      </div>}
    </>
  )
}
export default App;