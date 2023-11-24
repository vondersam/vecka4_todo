import dateFormat from 'dateformat';

function Item({ item, completeId }) {
  function isOverdue(item) {
    return !item.complete && item.timestampDue < new Date().getTime();
  }
  const itemClass = `list-group-item list-group-item-${
    isOverdue(item) ? 'danger' : 'info'
  }`;

  return (
    <li className={itemClass}>
      <div className="item">
        <span className={`item-title${item.complete ? ' complete-item' : ''}`}>
          {`${item.name} - ${dateFormat(
            new Date(item.timestampDue),
            'dd-mmm-yyyy'
          )}`}
        </span>
        {!item.complete && (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => completeId(item.id)}
          >
            Complete
          </button>
        )}
      </div>
    </li>
  );
}

export default Item;
