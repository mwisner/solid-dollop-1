import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { useState } from "react";
import response from "./API";
import "./styles.css";
import { ProductCard } from "./ProductCard";

/*
type Sneakers = {
    id: string;
    brand: string;
    colorway: string;
    gender: string;
    name: string;
    releaseDate: string;
    retailPrice: number;
    shoe: string;
    styleId: string;
    title: string;
    year: number;
    media: {
        imageUrl: string;
        smallImageUrl: string;
        thumbUrl: string;
    };
};
*/

// returns Promise<Sneaker[]>
const fetchAllSneakers = () => {
  return Promise.resolve(response).then((response) => {
    return [
      ...response?.Nike.results,
      ...response?.Adidas.results,
      ...response?.Puma.results,
      ...response?.Jordan.results,
    ];
  });
};

const MyComponent = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Filter sneakers by brand..."
        className="search-input"
      />
      <button type="button" className="search-button">
        Search
      </button>
      <button type="button" className="search-button">
        Sort by price
      </button>
      <p className="suggested-search-query">
        Example: "Nike", "Adidas", "Jordan", "Puma", etc.
      </p>
      <div className="search-results">{/* //TODO add ProductCard here */}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
