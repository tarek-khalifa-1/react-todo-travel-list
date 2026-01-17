import PackingListItem from "../PackingListItem/PackingListItem";

function PackingList({ data: items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingListItem
            key={item.id}
            data={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
