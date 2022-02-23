import TodoList from "./components/TodoList";
import LargeButton from "./components/LargeButton";
import ToDoListMVP from "./components/TodoMvp";
 
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
    <>
    <TodoList
      items={items}
      onItemClick={onItemClick}
    />

    <LargeButton text="Close Shipment" bgColor="#0a69f4"/>
    <LargeButton text="Close Shipment" bgColor="#0242eb"/>
    <LargeButton text="Close Shipment" bgColor="#d9e9fb"/>


    <div>
    <ToDoListMVP/>
    </div>
    </>
  );
}

export default App;
