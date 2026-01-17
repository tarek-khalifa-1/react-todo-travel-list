function PackingListItem({ data: item }) {
  return (
    <li>
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default PackingListItem;
