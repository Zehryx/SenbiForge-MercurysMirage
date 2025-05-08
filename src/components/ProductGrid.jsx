import React, { useEffect, useState } from "react";
import brandList from "../data/brands";

export default function ProductGrid({ selectedBrand, selectedTags, priceRange }) {
  const [brandsWithProducts, setBrandsWithProducts] = useState([]);

  useEffect(() => {
    async function loadAllProducts() {
      const loaded = await Promise.all(
        brandList.map(async (brand) => {
          const productsData = await import(`../data/products/${brand.brandId}.json`);
          return { ...brand, products: productsData.default };
        })
      );
      setBrandsWithProducts(loaded);
    }
    loadAllProducts();
  }, []);

  const filterProducts = (products) => {
    return products.filter((p) => {
      const price = parseFloat(p.price.replace(/[^0-9.]/g, "")) || 0;
      const matchMin = !priceRange.min || price >= parseFloat(priceRange.min);
      const matchMax = !priceRange.max || price <= parseFloat(priceRange.max);
      return matchMin && matchMax;
    });
  };

  const filtered = brandsWithProducts
    .filter((brand) => !selectedBrand || brand.brandId === selectedBrand)
    .map((brand) => ({
      ...brand,
      products: filterProducts(
        selectedTags.length
          ? brand.products.filter((_) =>
              selectedTags.every((tag) => brand.tags.includes(tag))
            )
          : brand.products
      )
    }))
    .filter((b) => b.products.length > 0);

  return (
    <div className="space-y-16">
      {filtered.map((brand) => (
        <div key={brand.brandId}>
          <h2 className="text-3xl font-bold mb-4">{brand.name}</h2>
          <p className="text-gray-400 mb-6">{brand.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brand.products.map((product) => (
              <a
                key={product.productId}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black rounded shadow overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}