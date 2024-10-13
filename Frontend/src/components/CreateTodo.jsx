export function CreateTodo(){
    return <div>
        <input type="text" placeholder="Title" style={{
            padding:10,
            margin:10,
            border:"1px solid black",
            borderRadius:"4px",
            outline:"none"
        }}/><br />

        <input type="text" placeholder="Descripition" style={{
            padding:10,
            margin:10,
            border:"1px solid black",
            borderRadius:"4px",
            outline:"none"
        }}/><br />

        <button style={{
            padding:10,
            margin:10,
            border:"1px solid black",
            borderRadius:"4px",
            backgroundColor:"green",
            color:"white",
            cursor:"pointer"
        }}>Add a Todo</button>
        
    </div>
}