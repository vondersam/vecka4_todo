import './App.css';
import Checkbox from './Checkbox';

function Header({ filter, setFilter }) {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand">Todo list</span>
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
      </nav>
    </header>
  );
}
export default Header;
