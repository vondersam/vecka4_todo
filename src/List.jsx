import Item from './Item';

function List({items, completeItem}) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          completeItem={() => completeItem(item.id)}
        />
      ))}
    </ul>
  );
}

export default List;
