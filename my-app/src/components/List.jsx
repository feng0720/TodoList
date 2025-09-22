import { useState } from "react";
import Button from "./button";

export default function List({list ,remove ,toggle}){
  // 创建一个状态对象来存储每个项目是否checked--这个是在List里面使用useState的方法，目前是使用在App里面使用的方法
  // const [check,setCheck] = useState({});

  return (
    <>
      <ul>
        {list.map(item=>{
          return(
            <li key={item.context} className="flex items-center justify-between mt-2 mb-2">
              <div className="flex items-center space-x-2">
                <label htmlFor="item">
                  {/* 设置初始的checked为false 如果改变了的话就根据context来改变对应的checked */}
                  {/* 最先开始这里的item.context是undefined属于非受控组件如果突然变成受控组件会报错这里使用!!保证其一直受控 */}
                  {/* <input type="checkbox" checked={!!check[item.context]} onChange={(e)=>{
                    setCheck({
                      ...check,
                      [item.context]:e.target.checked
                    })
                  }}/> */}
                  <input type="checkbox" name="finish" id="finish" checked={item.isFinished} onChange={()=>toggle(item.context)} />
                </label>
                {/* <span className={check[item.context]?"text-gray-600":""}>{" "+item.context+"  --date: "+item.date}</span> */}
                <span className={item.isFinished?"text-gray-600":""}>{" "+item.context+"  --date: "+item.date}</span>
              </div>
              {/* 编辑事件 */}
              <div className="flex space-x-2">
                <Button classname={"bg-green-500 mr-1"} >Edit</Button>
                {/* 删除事件如果还没完成需要询问是否需要删除 */}
                <Button classname="bg-red-500 mr-0" onClick={()=>{
                  if(!item.isFinished){
                    if(confirm("这个任务还没有完成哦\n确定要半途而废吗?\n还是说这个任务被突然取消掉了呢?")){
                      remove(item.context);
                    }
                  }else{
                    remove(item.context);
                  }
                }}>Delete</Button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}