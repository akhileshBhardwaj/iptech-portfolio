const BrandCard = ({ logo, name }) => {
  return (
    <div
      className="
      group
      flex
      h-32
      w-32
      shrink-0
      items-center
      justify-center
      rounded-3xl
      border
      border-yellow-200
      bg-white
      shadow-md
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-yellow-400
      hover:shadow-2xl
    "
    >
      <img
        src={logo}
        alt={name}
        className="
          h-20
          w-20
          object-contain
          transition-transform
          duration-500
          group-hover:scale-110
        "
      />
    </div>
  );
};

export default BrandCard;
