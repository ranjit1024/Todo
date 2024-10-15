import { useState } from "react"

export function CreateTodo([props]){
    //local state variable
    const [title, setTitle] = useState("");
    const [descripition, setDescripiton] = useState("");
    
    return <div style={{
        textAlign:"center"

    }}>
        <input type="text" placeholder="Title" style={{
            padding:"10px 100px 10px 10px",
            margin:10,
            border:"1px solid black",
            borderRadius:"4px",
            outline:"none"
        }}/><br />

        <input type="text" placeholder="Descripition" style={{
            padding:"10px 100px 10px 10px",
           
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
            backgroundColor:"royalblue",
            color:"white",
            cursor:"pointer",
            fontWeight:500
        }} onClick={()=>{
            fetch("http://192.168.2.6:3000/todo"),{
                method:"POST",
                body:{
                    title:
                }
            }
        }}>Add a Todo</button>
        
    </div>
}