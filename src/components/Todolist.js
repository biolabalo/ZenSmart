

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

 
export default TodoList;
