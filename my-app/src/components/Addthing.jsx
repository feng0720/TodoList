

export default function Addthing({handleChange,context,date,value}){
  
  return(
    <>
      <form onSubmit={e=>e.preventDefault} className="mb-4">
        <input type="text" id="context" onChange={context} className="border-2" value={value.context}/>
        <input type="date" id="date" onChange={date} value={value.date} className="border-2"/>
        <button onClick={handleChange} className="bg-blue-500 rounded-lg ml-3">add to list</button>
      </form>
    </>
  )
}