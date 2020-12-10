import React, { useState } from "react";
import "./styles.css";

const shoes = {
  Adidas: [
    { name: "Adilette Shower Slider", price: "$25", category: "Men" },
    {
      name: "Superstar Shoes",
      price: "$85",
      category: "Men"
    },
    {
      name: "Adissage Slides",
      price: "$30",
      category: "Women"
    }
  ],
  Nike: [
    {
      name: "Nike Air Max 97",
      price: "$140",
      category: "Women"
    },
    {
      name: "Nike Air VaporMax 2020 FlyKnit",
      price: "$200",
      category: "Women"
    }
  ],
  Woodland: [
    {
      name: "Black High-Top Sneaker",
      price: "$60",
      category: "Men"
    },
    {
      name: "Dark Brown Casual Sneaker",
      price: "$60",
      category: "Men"
    },
    {
      name: "Black Casual Loafers",
      price: "$55",
      category: "Men"
    },
    {
      name: "Black Pointed Toe Pumps",
      price: "$35",
      category: "Women"
    },
    {
      name: "Woods Brown Ballerinas",
      price: "$78",
      category: "Women"
    }
  ],
  Puma: [
    {
      name: "RS-Dreamer Super",
      price: "$119",
      category: "Men"
    },
    {
      name: "Cali Wedge Women's Snicker",
      price: "$90",
      category: "Women"
    },
    {
      name: "RS-Curve Glow Women's Snicker",
      price: "$100",
      category: "Women"
    }
  ],
  Reebok: [
    {
      name: "Astek Running",
      price: "$29",
      category: "Men"
    },
    {
      name: "Trainer Workout Plus",
      price: "$55",
      category: "Men"
    }
  ]
};

export default function App() {
  const [brandName, setBrandName] = useState("Adidas");
  function buttonClickHandler(brand) {
    setBrandName(brand);
  }
  return (
    <div className="App">
      <h1>Shoe's Collection</h1>
      <p>
        Welcome to shoe's collection here you can find
        <br />
        shoes of different brands
      </p>
      <hr />
      <div>
        {Object.keys(shoes).map((brand) => (
          <button
            key={brand}
            onClick={() => buttonClickHandler(brand)}
            style={{
              cursor: "pointer",
              background: "#1F2937",
              color: "white",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {brand}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul>
          {shoes[brandName].map((shoetype) => (
            <li
              key={shoetype.name}
              style={{
                listStyle: "none",
                backgroundColor: "#9CA3AF",
                padding: "0.6rem",
                margin: "0.9rem",
                borderRadius: "1rem"
              }}
            >
              <div style={{ fontSize: "large" }}>{shoetype.name}</div>
              <div style={{ fontSize: "small" }}>Price: {shoetype.price}</div>
              <div style={{ fontSize: "small" }}>
                Category: {shoetype.category}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
