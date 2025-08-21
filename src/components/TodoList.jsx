import React, { useState } from 'react'

const TodoList = () => {
  // input style

  let inputstyle={
     border:"2px solid green",
     padding:"10px",
     borderRadius:"7px",
     marginRight:"8px",
  }

  // button style
  let addbtnstyle={
     backgroundColor:"blue",
     borderRadius:"10px",
     color:"white",
     border:"none",

  }
  let delbtnstyle={
      backgroundColor:"red",
      borderRadius:"10px",
      color:"white",
      border:"none",
  }

  // todo list
  const[todos,setTodos]=useState([]);

  // newtodolist
  const[newtodo,setnewtodo]=useState("");

  // updateting value
  let updateValue=(e)=>{
      setnewtodo(e.target.value);
  }

  // adding value
  let addValue=()=>{
     setTodos([...todos,{Task:newtodo,done:false}]);
     setnewtodo("");
  }
  //deleting value
  let delvalue=(id)=>{
     setTodos((prevtodos)=>prevtodos.filter((item,idx)=> idx!=id));
  }

  //capitialising 

  let updateOne=(id)=>{
  
       setTodos((prevtodos)=>prevtodos.map((item,idx)=>id==idx? {...item,Task:item.Task.toUpperCase()}:item));
 
  };

  //marking as done

  let markedAsDone=(id)=>{
    console.log("kilk")
       setTodos((prevtodos)=>prevtodos.map((item,idx)=>idx===id?{...item,done:true}:item));
  }
  
  //upperCaseAll

  let upperCaseAll=()=>{
    setTodos((prevtodos)=>prevtodos.map((item)=>({...item,Task:item.Task.toUpperCase()})));
  }


  return (
    <>
    <input type='text' placeholder='Enter your text here' style={inputstyle} value={newtodo} onChange={updateValue} />
    <button onClick={addValue} style={addbtnstyle}>Add Task</button>
    <ul>
       {
        todos.map((item,id)=>(
          <li key={id} style={{marginBottom:"5px"}} >
            <span style={{textDecoration:item.done?"line-through":"none"}}>{item.Task}</span>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* delete button */}
           <button  onClick={()=>delvalue(id)} style={delbtnstyle}>Delete</button>

           {/* update button */}

           <button style={{backgroundColor:"pink",marginLeft:"3px"}} onClick={()=>updateOne(id)}>UpperCaseOne</button>

           {/* mark as done */}
           <button style={{backgroundColor:"green",marginLeft:"3px"}} onClick={()=>markedAsDone(id)}    >MarkAsDone</button>
         
          </li>
          
        ))
      }
      </ul>
      <button  style={{backgroundColor:"gray"}} onClick={upperCaseAll}>UpperCaseAll</button>
    </>
  )
}

export default TodoList