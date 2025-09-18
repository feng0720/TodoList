import Button from "./button";

export default function List({list}){
  return (
    <>
      <ul>
        {list.map(item=>{
          return(
              <li key={item.context}>
                <label htmlFor="item">
                  <input type="checkbox" />
                </label>
                {" "+item.context}
                {/* 编辑事件 */}
                <Button classname={"bg-green-500"}>Edit</Button>
                {/* 删除事件如果还没完成需要询问是否需要删除 */}
                <Button classname="bg-red-500">Delete</Button>
                <hr />
              </li>
          )
        })}
      </ul>
    </>
  )

}