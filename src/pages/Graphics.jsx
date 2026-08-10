import React from "react";
import GraphicsHeroPage from "../components/graphicsPage/graphicsHero/GraphicsHeroPage";
import ProductShoots from "../components/graphicsPage/productShoots/ProductShoots";
import FastivelBanner from "../components/graphicsPage/fastivelBanner/FastivelBanner";

const Graphics = () => {
  return (
    <div className="pt-25">
      {/* Hero section */}
      <section>
        <GraphicsHeroPage />
      </section>

      {/* Product shoots section */}
      <section>
        <ProductShoots />
      </section>
  
      <section>
        <FastivelBanner />
      </section>
    </div>
  );
};

export default Graphics;
