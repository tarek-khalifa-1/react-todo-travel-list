import PackingListItem from "../PackingListItem/PackingListItem";

function PackingList({ data: items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <PackingListItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
