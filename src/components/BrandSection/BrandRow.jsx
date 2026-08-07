import BrandCard from "./BrandCard";

const BrandRow = ({ brands, reverse = false }) => {
  return (
    <div className="marquee">
      <div
        className={`marquee-track ${
          reverse ? "marquee-reverse" : "marquee-forward"
        }`}
      >
        {[...brands, ...brands].map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandRow;
