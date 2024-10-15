export function Todos({todos}){
    
    return <div style={{
        width:"400px",
        
        margin:"auto",
        textAlign:"center"
        // marginBottom:10
    }}>
        {todos.map(function(todo) {
            return <div style={{textAlign:"center", width:"400px",backgroundColor:"lightblue", padding:"10px", marginBottom:"10px", borderRadius:"4px"}}>
                <h1>{todo.title}</h1>
                <h2>{todo.descripition}</h2>
                <button style={{padding:"10px 20px", borderRadius:"5px" , border:"1px solid black", backgroundColor:"green", color:"white"}}>{todo.completed==true ? "completed" : "not Completed"}</button>
            </div>
        })}
    </div>
}