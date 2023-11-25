import dateFormat from 'dateformat';
import isOverdue from './isOverdue';

function Item({ item, completeItem }) {
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
            onClick={() => completeItem(item.id)}
          >
            Complete
          </button>
        )}
      </div>
    </li>
  );
}

export default Item;
