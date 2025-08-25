import Addtodo from "./components/Addtodo"
import Appname from "./components/Appname"
import "./App.css";
import Welcomemsg from "./components/Welcomemsg";
import Todoitems from "./components/Todoitems";
import { useState } from "react";

function App() {


const [todoitems, settodoitems] = useState([]);

const handleonNewitem = (itemName, itemDueDate) => {
  const newtodoitem = [...todoitems, {
    name: itemName, duedate: itemDueDate,
  },];
  settodoitems(newtodoitem);
}

const handleDeleteitem = (todoName) =>{
  console.log(`item Deleted:${todoName}`);
  const newtodoitem = todoitems.filter(item => item.name !== todoName);
  settodoitems(newtodoitem);
}

  return <center className="todo-container">
    <Appname />
    <Addtodo onNewitem={handleonNewitem}/>
    {todoitems.length == 0 && <Welcomemsg ></Welcomemsg> }
    <Todoitems todoitems={todoitems} onDeleteClick={handleDeleteitem} />

  </center>
}

export default App
