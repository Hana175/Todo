import TodoItem from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
   return( 
   <ul className="list">
  {todos.length === 0 && "No todos, yay!"} 
  {/* the line above is called short circuiting, its a concept in jsx, after the ampersand is perfoemed if the condition before the ampersand is true. */}
  {todos.map(todo => {
    return (
        //or we can <TodoItem {...todo}/>
    <TodoItem {...todo} 
    key= {todo.id}
     toggleTodo={toggleTodo}
     deleteTodo={deleteTodo}
     />
  )
  })}
</ul>
   )
}