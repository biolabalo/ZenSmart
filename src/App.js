import './App.css';


const  TodoList = ({ items, onItemClick }) =>  {
    return (
      <ul>
        {items.map((item, index) => (
          <li      
           onClick={event => !item.done ? onItemClick(item, event) : event.stopPropagation() }
           key={index}>{item.text}</li>
        ))}
      </ul>
    );
  }

 
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
