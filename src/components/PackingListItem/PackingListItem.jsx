function PackingListItem({ data: item, onDeleteItem, onToggleItem }) {
  console.log(item);
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default PackingListItem;
