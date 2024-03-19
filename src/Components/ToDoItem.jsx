export default function ToDoItem({todoName,todoDate})
{
  return(
    <div className="container">
  <div className="row myRow">
<div className="col-6">{todoName}</div>
<div className="col-4">{todoDate}</div>
<div className="col-2">
<button type="button" classNameName="btn btn-danger myButton">Delete</button>

</div>
</div>  
</div> 

  )
}