import { useState } from "react";
import PackingListItem from "../PackingListItem/PackingListItem";

function PackingList({ data: items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "descriptionAZ")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "descriptionZA")
    sortedItems = items
      .slice()
      .sort((a, b) => b.description.localeCompare(a.description));

  if (sortBy === "packed")
    sortedItems = [...items].sort(
      (a, b) => Number(a.packed) - Number(b.packed),
    );

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackingListItem
            key={item.id}
            data={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="descriptionAZ">Sort by description (A-Z)</option>
          <option value="descriptionZA">Sort by description (Z-A)</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
