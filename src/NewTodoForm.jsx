import React, { useState } from "react";
//instead of giving NewTodoForm a prop called onSubmit, we're destructuring it, so we can use it directly.
export function NewTodoForm({onSubmit}){
    // props.onSubmit //takes whatever function we pass to it, and calls it when the form is submitted.
    const [newItem, setNewItem] = useState("") //use state takes a default value

    function handleSubmit(e){
        e.preventDefault(); //prevents page from refreshing when we click on add button.
        if(newItem === "") return; //if the new item is empty, we dont want to add it to the list.
          onSubmit(newItem);
          setNewItem(""); //clears the input field after submitting.
      }
   return( 
   <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input value={newItem} 
      onChange={e => setNewItem(e.target.value)} 
      type="text"
       id="item" /> 
      {/* by making the input value = to newItem, we're telling our app we want the input to be equal whatever our new item is. */}
      {/* onChange logic: if user clicks on anything, its considered a change, so we update newOtem by e.target.value its getting the value of input, setting it as the new value, ya3ni ama bakteb fel input field, beyezhar, mengherha it wont write anything, any changes updates the whole component/ renders it. */}
    </div>
    <button className="btn">Add</button>
    </form>
   )
}