import todo from './mockData.json';
import Item from './Item';
import { useState } from 'react';

function List() {
  const [items, setItems] = useState(todo.Items);
  function completeId(id) {
    const updatedItems = items.map((item) => {
      return item.id === id ? { ...item, complete: true } : item;
    });
    setItems(updatedItems);
  }
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item.id} item={item} completeId={completeId} />
      ))}
    </ul>
  );
}

export default List;
