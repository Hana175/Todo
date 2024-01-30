import { useEffect, useState } from "react"
import "./styles.css"
import { TodoList } from "./TodoList";
import { NewTodoForm } from "./NewTodoForm"
export default function App() {
  //hooks in react need to be put at the top of the function.
 // the first value is the value of the state, the second value is the function to update the state value
 // destructuring: putting the first element in the array, and the second element is going to be set+firstelement'sname
  const [todos, setTodos] = useState(() =>{
    const localValue = localStorage.getItem("ITEM")
    if(localValue == null) return []
    return JSON.parse(localValue)
  })
 //a state is immutable, we cannot change it directly, we need to use the function to update the state  

 //we're linking this app to a local storage.
 //a new hook called useEffect
 //run this function everytime the object inside the array of our second property changes.
 useEffect(() => {
  //run this function righy here everytime the todos change, store information in loval storage.
  localStorage.setItem("ITEM", JSON.stringify(todos))
 }, [todos])
 function addTodo(title){
  setTodos(currentTodos => {
    return [
      ...currentTodos,
      { id: crypto.randomUUID(),
        title, 
        completed: false
       },
   ];
  });
 }
function toggleTodo(id, completed){
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed}
          //changing the completed property to the one given as argument to the function, by creating a brand new state object
        
      }
      //if its not matching with the id, we return it as is.
      return todo
    })
  })
}
function deleteTodo(id){
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

console.log(todos)  
  return(
      <>
      <NewTodoForm onSubmit={addTodo}/>
    {/* the line above is importing a component, if it starts with a capital letter react understands that its a custom compoentn */}
    <h1 className="header">
      To Do List
    </h1>
    <TodoList todos={todos} 
    toggleTodo={toggleTodo} 
    deleteTodo={deleteTodo}/>
    </>
    )
  }
//a function inside react as long as it starts with a capital letter, its a component.
//a component is for breaking down individual parts of the application.
//we can only return one element froma  component.
// we can wrap it in a div or a fragment
// a fragment is a special element that does not render anything to the dom
// how to add a fragment
// by: return(<> elements to return from a component</>)
// to introduce interactivity to the app, we need to use something called state, a state is a hook inside react.