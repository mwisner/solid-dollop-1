import React from "react";
import { useState } from "react";

import "./styles/index.css";
import "./styles/styles.css";
import { ProductCard } from "./components/ProductCard";
import { fetchAllSneakers } from "./API/fetchData";


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


export const PartTwo = () => {
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
