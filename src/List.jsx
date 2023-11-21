import todo from './mockData.json';
import Item from './Item';

function List() {
  return (
    <ul className="list-group">
      {todo.Items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default List;
