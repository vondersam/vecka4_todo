import Header from './Header';
import List from './List';
import { useState } from 'react';
import todo from './mockData.json';
import isOverdue from './isOverdue';

function App() {
  const [items, setItems] = useState(todo.Items);
  const [filter, setFilter] = useState({
    overdueOnly: false,
    includeComplete: false
  });
  function completeItem(id) {
    const updatedItems = items.map((item) => {
      return item.id === id ? { ...item, complete: true } : item;
    });
    setItems(updatedItems);
  }
  const filteredItems = items.filter(
    (item) =>
      (filter.includeComplete || !item.complete) &&
      (!filter.overdueOnly || isOverdue(item))
  );
  return (
    <div className="fluid-container app-container">
      <Header filter={filter} setFilter={setFilter} />
      <List items={filteredItems} completeItem={completeItem} />
    </div>
  );
}

export default App;
