import React from "react";

export default function Filters({
  brands,
  selectedBrand,
  setSelectedBrand,
  selectedTags,
  setSelectedTags,
  priceRange,
  setPriceRange
}) {
  const allTags = Array.from(
    new Set(brands.flatMap((b) => b.tags || []))
  );

  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 mb-10 shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Brand</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b.brandId} value={b.brandId}>{b.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm border ${
                  selectedTags.includes(tag)
                    ? "bg-white text-black"
                    : "bg-gray-800 text-gray-300 border-gray-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Price Range ($)</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
            />
            <span className="text-gray-500">–</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              className="w-full bg-gray-800 text-white border border-gray-700 p-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
