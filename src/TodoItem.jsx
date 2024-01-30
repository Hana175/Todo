export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return ( <li>
        {/* if we want to edit/delete/modify a certain todo? we're going to need the id for it. its a performance optimization to make sure code runs faster, do not use idnex, is better to use id. */}
    <label>
      <input
       type="checkbox" 
      checked={completed} 
      onChange={e => toggleTodo(id, e.target.checked)} />
      {title}
      </label>
      <button className="btn btn-danger"
       onClick={() => deleteTodo(id)}>
        Delete </button>
    {/* onClick ={deleteTodo(todo.id) returns the OUTCOME/the result of deletetodo, of the function,
    but onClick= {() => deleteTodo(todo.id) actually performs the function} } */}

  </li>
  )
}