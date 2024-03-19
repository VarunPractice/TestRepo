import styles from "./AddToDo.module.css"
function AddToDo()
{
  return (
    <div className="container">
       <div className="row myRow">
     
      <div className={"col-6 "}>
        <input className={styles.input} type='text' placeholder='Enter ToDo here'/>
            </div>
      <div className="col-4">
        <input type='date'/>
      </div>
      <div className="col-2">
      <button type="button"  className="btn btn-success myButton">Add</button>
      </div>
    </div>
    </div>
  )
}

export default AddToDo;