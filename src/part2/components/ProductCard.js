export const ProductCard = ({ sneaker }) => {
  return (
    <div key={sneaker.id} className="search-result">
      <img
        className="search-result-image"
        src={sneaker?.media?.thumbUrl}
        alt={sneaker.name}
      />
      <div className="search-result-info">
        <h3>{`${sneaker.brand} ${sneaker.name}`}</h3>
        <p>{`Release Date: ${sneaker.releaseDate}`}</p>
        <p>{`Retail Price: $${sneaker.retailPrice}`}</p>
      </div>
    </div>
  );
};
