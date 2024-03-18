import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      title: "iphone",
      price: 1000,
    },
    {
      title: "ipod",
      price: 600,
    },
    {
      title: "imac",
      price: 1200,
    },
  ]);

  const setItemAmount = (index, value) => {
    const copyItems = [...items];
    copyItems[index].count = value;
    setItems(copyItems);
  };

  return (
    <div className="App">
      {items.map((item, index) => (
        <div key={item.title}>
          {item.title}: {item.price}
          {!item.count ? (
            <button onClick={() => setItemAmount(index, 1)}>Купить</button>
          ) : (
            <div>
              <button onClick={() => setItemAmount(index, item.count - 1)}>-</button>
              <b>{item.count}</b>
              <button onClick={() => setItemAmount(index, item.count + 1)}>+</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
