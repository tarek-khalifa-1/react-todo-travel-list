import { useState } from "react";
import Form from "./components/Form/Form";
import Logo from "./components/Logo/Logo";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 12, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList data={items} />
      <Stats />
    </div>
  );
}

export default App;
