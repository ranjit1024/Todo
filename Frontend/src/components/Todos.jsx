export function Todos({todos}){
    
    return <div style={{
        width:"400px",
        backgroundColor:"red",
        margin:"auto",
    }}>
        {todos.map(function(todo) {
            return <div style={{textAlign:"center"}}>
                <h1>{todo.title}</h1>
                <h2>{todo.descripition}</h2>
                <button style={{padding:"10px 20px", borderRadius:"5px" , border:"1px solid black", backgroundColor:"green", color:"white"}}>{todo.completed==true ? "completed" : "not Completed"}</button>
            </div>
        })}
    </div>
}