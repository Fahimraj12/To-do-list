import React, { useState } from 'react'
import { BiSolidMessageAdd } from "react-icons/bi";
const Addtodo = ({onNewitem}) => {

  const [todoName, settodoName] = useState('');
  const [duedate, setDueDate] = useState('');

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = ()=> {
    onNewitem(todoName, duedate);
    setDueDate("");
    settodoName("");
  }
  return (
    <div className="container text-center">
    <div className="row kg-row">
    <div className="col-6">
      <input type="text" placeholder="Enter Todo Here:" value={todoName} onChange={handleNameChange}/>
    </div>
    <div className="col-4">
      <input type="date" value={duedate} onChange={handleDateChange}/>
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success kg-btn" onClick={handleAddButtonClicked}>
        <BiSolidMessageAdd />

      </button>
    </div>
  </div>
  </div>
  )
}

export default Addtodo
