

export default function Button({onClick,children,classname}){
  return (
    <>
      <button onClick={onClick} className={"border rounded-lg p-1 "+classname}>{children}</button>
    </>
  );
}