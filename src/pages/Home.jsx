import React, { useEffect, useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import brandList from "../data/brands";

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  return (
    <main className="p-6">
      <Hero />
      <div id="grid">
        <Filters
          brands={brandList}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />
        <ProductGrid
          selectedBrand={selectedBrand}
          selectedTags={selectedTags}
          priceRange={priceRange}
        />
      </div>
    </main>
  );
}
