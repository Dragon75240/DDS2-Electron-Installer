// src/App.tsx

import { useState } from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";

interface Item {
  id: number;
  name: string;
  description: string;
}

function App() {
  const [checkedItems, setCheckedItems] = useState<Item[]>([]);
  const items: Item[] = [
    { id: 1, name: "Item 1", description: "idk" },
    { id: 2, name: "Item 2", description: "Another item" },
  ];

  const checkboxChange = (itemId: number, itemData: Item) => {
    setCheckedItems((prevState) =>
      prevState.some((item) => item.id === itemId)
        ? prevState.filter((item) => item.id !== itemId)
        : [...prevState, itemData]
    );
  };

  return (
    <>
      <div className="App">
        <MenuBar></MenuBar>
        <table className="spreadsheet-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Enabled</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <input
                    type="checkbox"
                    name={`item-${item.id}`}
                    id={`item-${item.id}`}
                    checked={checkedItems.some(
                      (checkedItem) => checkedItem.id === item.id
                    )}
                    onChange={() => checkboxChange(item.id, item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
