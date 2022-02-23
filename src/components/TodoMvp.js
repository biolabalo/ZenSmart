import React from "react";
import LargeButton from "./LargeButton"

const AddTaskForm = ({ addTask }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value && addTask(value)
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} 
    className="m-5"
    >
      <input
        type="text"
        value={value}
        placeholder="Enter a title for this task…"
        onChange={e => setValue(e.target.value)}
      />
      <LargeButton text="ADD TODO" bgColor="#0a69f4"/>
    </form>
  );
}

const ToDoListMVP = () => {

  const [tasks, setTasks] = React.useState([{
      text: "Visit grandma",
      done: false
    },{
      text: "Play BasketBall",
      done: true
    },{
      text: "Buy diappers",
      done: false
    }]);

  const addTask = text => setTasks([...tasks, { text }]);

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };



  return (
    <div className="todo-list">
     <AddTaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        <div 
        key={index}
        className="todo">
          <span  className={task.done ? "todo-text todo-completed" : "todo-text"}>
            {task.text}
          </span>
          <LargeButton clickHandler={() => toggleTask(index)}  text={task.done ? "Mark as UnDone": "Mark as Done"} bgColor="#0a69f4"/>
        </div>
      ))}

    </div>
  );
}

export default ToDoListMVP;
