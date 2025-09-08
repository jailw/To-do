// // // import React, { useState } from 'react'

// // // function Todo() {
// // //       const [input,setInput]=useState('');
// // //       const [tasks,setTasks]=useState([]);

// // //       const addToDo=()=>{
// // //             if(input.trim()!==''){
// // //                   const newTask={text:input,completed:false};
// // //                   setTasks([...tasks,newTask]);
// // //                   setInput('');

// // //             }
// // //       }

// // //       const handleTodo=(index)=>{
// // //             const updatedTask=[...tasks];
// // //             updatedTask[index].completed=!updatedTask[index].completed;
// // //             setTasks(updatedTask);
// // //       }
// // //       const deleteTodo=(index)=>{
// // //             const updatedTask=tasks.filter((_,i)=>i!==index);
// // //             setTasks(updatedTask);
// // //       }
// // //   return (
// // //     <div>
// // //       <input type='text' placeholder='Enter task'  value={input}onChange={(e)=>setInput(e.target.value)}></input>
// // //       <button onClick={addToDo}>Add</button>

// // //       <ul>
// // //             {tasks.map((task,index)=>(
// // //                   <li>
// // //                         <input type='checkbox' checked={task.completed} onChange={()=>handleTodo(index)}></input>
// // //                         <span style={{textDecoration:task.completed ? 'line-through':'none'}}></span>
// // //                         {task.text}
// // //                         {task.completed && (
// // //                               <button onClick={()=>deleteTodo(index)}>delete</button>
// // //                         )}
// // //                   </li>
// // //             ))}
// // //       </ul>
// // //     </div>
// // //   )
// // // }

// // // export default Todo

// // import React, { useState } from 'react'

// // function Todo() {
// //       const [input,setInput]=useState('');
// //       const [tasks,setTasks]=useState([]);
// //       const addTodo=()=>{
// //             if(input.trim!==''){
// //                   let newTask={text:input,completed:false};
// //                   setTasks([...tasks,newTask]);
// //                   setInput('');
// //             }
// //       }

// //       const handleTodo=(index)=>{
// //             let updatedTask=[...tasks];
// //             updatedTask[index].completed=!updatedTask[index].completed;
// //             setTasks(updatedTask);
// //       }
// //       const deleteTodo=(index)=>{
// //             let updatedTask=tasks.filter((_,i)=>i!==index);
// //             setTasks(updatedTask);
// //       }
// //   return (
// //     <div>
// //       <input type='text' value={input}  onChange={(e)=>setInput(e.target.value)}></input>
// //       <button onClick={addTodo}>Add</button>
// //       <ul>
// //             {tasks.map((task,index)=>(
// //                   <li key={index}>
// //                         <input type='checkbox' checked={task.completed} onChange={()=>handleTodo(index) }></input>
// //                         <span style={{textDecoration:task.completed ? 'line-through':"none"}}></span>
// //                         {task.text}
// //                         {task.completed && (
// //                               <button onClick={()=>deleteTodo(index)}>delete</button>
// //                         )}

// //                   </li>
// //             ))}
// //       </ul>
// //     </div>
// //   )
// // }

// // export default Todo


//Perform Crud Operation USing React 

// import React, { useState } from 'react'

// function Todo() {

//       const [input,setInput]=useState('');
//       const [tasks,setTasks]=useState([]);
//       const [isedit,setEdit]=useState(false);
//       const [currIndex,setcurrIndex]=useState(null);
//       const addToDo=()=>{
//             if(input.trim()!=='')
//             {
//                   if(isedit){
//                         const updatedTask=[...tasks];
//                         updatedTask[currIndex].text=input;
//                         setTasks(updatedTask);
//                         setEdit(false);
//                         setcurrIndex(null);

//                   }
//                   else{
//                   const newTask={text:input,completed:false};
//                   setTasks([...tasks,newTask]);
//                   }
//                   setInput('');
//             }
//       }

//       const handleToDo=(index)=>{
//             const updatedTask=[...tasks];
//             updatedTask[index].completed=!updatedTask[index].completed;
//             setTasks(updatedTask);
//       }
      
//       const deleteToDo=(index)=>{
//             const updatedTask=tasks.filter((_,i)=>i!==index);
//             setTasks(updatedTask);
//       }

//       const editToDo=(index)=>{
//             setInput(tasks[index].text);
//             setEdit(true);
//             setcurrIndex(index);

//       }
//   return (
//     <div>
//       <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
//       <button onClick={addToDo}>{isedit ? 'Update':'Add'}</button>
//       <ul>
//             {tasks ?(
//                   tasks.map((task,index)=>(
//                         <li key={index}>
//                               <input type='checkbox' checked={task.completed} onChange={()=>handleToDo(index)}></input>
//                               <span style={{textDecoration:task.completed ? 'line-through':'none'}}></span>
//                               {task.text}
//                               <button onClick={()=>editToDo(index)}>Edit</button>
//                               {task.completed &&
//                               <button onClick={()=>deleteToDo(index)}>Delete</button>
//                               }
//                         </li>
//                   ))
//             ):(
//                   <p>Loading..</p>
//             )
//             }
//       </ul>
//     </div>
//   )
// }

// export default Todo






