import './App.css';
import Checkbox from './Checkbox';
import { useState } from 'react';
import NewItem from './newItem';

function Header({ filter, setFilter, addItem }) {
  const [adding, setAdding] = useState(false);
  const addNewItem = (item) => {
    setAdding(false);
    addItem(item);
  };
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">Todo list</span>
        <div
          style={{
            flexDirection: 'inherit',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {!adding && (
            <button
              type="button"
              className="btn btn-link"
              onClick={() => setAdding(true)}
            >
              Add new item
            </button>
          )}
          <Checkbox
            label="Overdue items only"
            selected={filter.overdueOnly}
            select={() => setFilter({ ...filter, overdueOnly: true })}
            unSelect={() => setFilter({ ...filter, overdueOnly: false })}
          />
          <Checkbox
            label="Include complete items"
            selected={filter.includeComplete}
            select={() => setFilter({ ...filter, includeComplete: true })}
            unSelect={() => setFilter({ ...filter, includeComplete: false })}
          />
        </div>
        {adding && <NewItem cancel={() => setAdding(false)} add={addNewItem} />}
      </nav>
    </header>
  );
}
export default Header;
