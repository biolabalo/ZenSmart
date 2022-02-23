import TodoList from "./components/Todolist"
 
const App = () => {

  const items = [
    { text: "Visit grandma", done: true },
    { text: "Play BasketBall", done: false },
    { text: "Buy diappers", done: false }
  ];

  const onItemClick = (item, event) => {  
    console.log(item, event)
  }
  
  return (
    <TodoList
      items={items}
      onItemClick={onItemClick}
    />
  );
}

export default App;
