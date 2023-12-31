import Header from './Header';
import List from './List';
import { useState, useEffect } from 'react';
import todoApi from './todoApi';
import isOverdue from './isOverdue';

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({
    overdueOnly: false,
    includeComplete: false
  });
  const [loading, setLoading] = useState(false);

  async function loadItems() {
    setLoading(true);
    const todoItems = await todoApi.get();
    setItems(todoItems);
    setLoading(false);
  }
  useEffect(() => {
    loadItems();
  }, []);

  async function complete(id) {
    const updatedItems = await todoApi.complete(id);
    setItems(updatedItems);
  }

  async function add(item) {
    const updatedItems = await todoApi.add(item);
    setItems(updatedItems);
  }

  const filteredItems = items.filter(
    (item) =>
      (filter.includeComplete || !item.complete) &&
      (!filter.overdueOnly || isOverdue(item))
  );
  return (
    <div className="fluid-container app-container">
      <Header filter={filter} setFilter={setFilter} addItem={add} />
      {!loading && (
        <div className="list">
          <List items={filteredItems} completeItem={complete} />
        </div>
      )}
      {loading && (
        <div className="alert alert-info" role="alert">
          Loading please wait...
        </div>
      )}
    </div>
  );
}

export default App;
