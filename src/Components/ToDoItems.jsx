import ToDoItem from "./ToDoItem";
import syles from "./ToDoItems.module.css";
const ToDoItems=({todoItems})=>
{
  return(

    <div className={syles.itemsContainer}>
      {todoItems.map((items)=>(<ToDoItem todoDate={items.dueDate} todoName={items.name}></ToDoItem>))}
    </div>
  )
}

export default ToDoItems