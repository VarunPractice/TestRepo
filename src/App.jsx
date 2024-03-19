import AppName from './Components/AppName'
import ToDoItems from './Components/ToDoItems' 
import "./App.css"
import AddToDo from './Components/AddToDo';

function App() {
const ToDoItem=[
  {
    name:"Read DSA",
    dueDate:"01/04/2024"
  },
  {
    name:"Read React",
    dueDate:"01/04/2024"
  },
  {
    name:"MongoDB",
    dueDate:"01/04/2024"
  },
  {
    name:"No SQL",
    dueDate:"01/04/2024"
  },
];
  return ( 
    <center className="container-text-center">
       <AppName/> 
       <AddToDo></AddToDo>
        <ToDoItems todoItems={ToDoItem}></ToDoItems>
   

    
  </center>
  )
  
  
}

export default App
