import Button from "./button";

export default function List({list ,remove}){
  return (
    <>
      <ul>
        {list.map(item=>{
          return(
            <li key={item.context} className="flex items-center justify-between mt-2 mb-2">
              <div className="flex items-center space-x-2">
                <label htmlFor="item">
                  <input type="checkbox" />
                </label>
                <span>{" "+item.context+"  --date: "+item.date}</span>
              </div>
              {/* 编辑事件 */}
              <div className="flex space-x-2">
                <Button classname={"bg-green-500 mr-0"}>Edit</Button>
                {/* 删除事件如果还没完成需要询问是否需要删除 */}
                <Button classname="bg-red-500 mr-0" onClick={()=>remove(item.context)}>Delete</Button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}