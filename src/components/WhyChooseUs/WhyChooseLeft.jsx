import { whyChooseData } from "./whyChooseData";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseLeft = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {whyChooseData.map((item) => (
        <WhyChooseCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default WhyChooseLeft;
