import { useState } from "react";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearList() {
    if (items.length === 0) return;
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        data={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats data={items} />
    </div>
  );
}

export default App;
