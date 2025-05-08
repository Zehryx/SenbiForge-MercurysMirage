const BrandCard = ({ brand }) => (
  <div className="rounded-2xl overflow-hidden shadow-lg transition hover:shadow-xl bg-white">
    <img src={brand.image} alt={brand.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{brand.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{brand.description}</p>
      <a href={brand.affiliateLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
        Shop Now
      </a>
    </div>
  </div>
);

export default BrandCard;
