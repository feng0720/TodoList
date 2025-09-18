# learn react

## 参数传递

```js
import './App.css'

function App(){
  // 传递自定义参数
  // const handleClick = (name) =>{
  //   alert(`my name is ${name}`);
  // }
  // 传递自定义参数和事件参数e
  const handleClick = (name,e)=>{
    console.log("this, is react",name,e);
  }
  return (
    <div>
      {/*这个是需要一个箭头函数的样子如果需要参数的话 */}
      <button onClick={(e)=>handleClick("fengnaun",e)}>click me</button>
    </div>
  )
}

export default App;
```

>这里需要注意的是如果有参数的传递的时候在调用时候需要使用箭头函数

## 状态变量

```js
import './App.css'
import { useState } from 'react';

function App(){
  // 调用useState添加一个状态
  // count状态变量
  // setCount 修改状态方法
  const [count,setCount] = useState(0);

  // 点击事件的回调函数
  const handle = ()=>{
    // 直接更新不行
    // count++;
    // 用传入的新的值修改count.重新使用count渲染ui
    setCount(count+1);
  }

  const [form,setForm] = useState({ name :'jack'});
  const changeForm = ()=>{
    // 不能直接改
    // form.name = "john";
    // 要使用setForm方法
    setForm({
      ...form,name:"john"
    })
  }
  return (
    <div>
      <button onClick={changeForm}>{form.name}</button>
      <button onClick={handle}>{count}</button>
    </div>
  )
}

export default App;
```

对于对象需要先展开然后在实现改变值
>这里的状态变量只能使用对应的方法才可以更新ui

## 受控表单绑定

```js
import { useState } from 'react'
// 绑定value属性绑定react状态
// 绑定onChange事件通过事件参数e拿到输入框的最新的值,反向修改到react状态
function App(){
  const [value,setValue] = useState('');
  return (
    <div>
      <input
        value = {value}
        onChange = {e=>setValue(e.target.value)}
        type="text"
      />

    </div>
  )
}
```

## react绑定DOM

```js
import { useRef } from 'react'

// useRef生成ref对象 绑定到dom标签身上
// dom可用的时候 ref.current获取dom
// 渲染完毕之后dom生成之后就可以使用

function App(){
  const inputRef = useRef('');
  const showDom = ()=>{

  }
  return (
    <div>
      <input
        value = {value}
        onChange = {e=>setValue(e.target.value)}
        type="text"
      />

    </div>
  )
}
```

## 数据的传递

1. 父传子--直接用props或者对应的形参
2. 子传父--在子组件中调用父组件中的函数并传递实参

```js
// 子传父的一个实现
import { useState } from 'react'

function Son(onGetmsg){
  const sonMsg = "I`m son message"; // 子组件中的消息
  return (
    <div>
      this is Son,
      {/* 当点击的时候调用这个函数这个函数对应的是父组件中的函数就可以把子组件中的信息传递到父组件中*/}
      <button onClick={()=>onGetmsg(sonMsg)}>sendmsg</button>
    </div>
  )
}

function App(){
  const [msg,setMsg] = useState('');
  const getMsg = (msg)=>{
    console.log(msg);
    setMsg(msg);
  }
  return(
    <div>
      this is App,{msg}
      {/*这个是关键传入的props是父组件中的函数*/}
      <Son onGetmsg={getMsg}/>
    </div>
  ) 
}
```

3. 兄弟之间进行消息的传递--先传给父再传给另外一个子实现兄弟之间传递

