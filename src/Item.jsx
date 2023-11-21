import dateFormat from 'dateformat';

function Item({ item }) {
  function isOverdue(item) {
    return !item.complete && item.timestampDue < new Date().getTime();
  }
  const itemClass = `list-group-item list-group-item-${
    isOverdue(item) ? 'danger' : 'info'
  }`;

  return (
    <li className={itemClass}>
      {`${item.name} - ${dateFormat(
        new Date(item.timestampDue),
        'dd-mmm-yyyy'
      )}`}
    </li>
  );
}

export default Item;
