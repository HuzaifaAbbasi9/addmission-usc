import React from "react";

interface Card {
  image: string;
  title: string;
  description?: string;
}

interface CategoryGridProps {
  cards: Card[];
  headingFont?: string;
  hasContainer?: boolean;
  textHeight?: string;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ cards, headingFont="lg:text-32px max-lg:text-28px", hasContainer=true, textHeight="min-h-115px" }) => {
  return (
    <section className={`grid lg:grid-cols-3 mm-sm-lg:grid-cols-2 lg:gap-8 max-lg:gap-5 ${hasContainer ? "custom-container" : ""}`}>
      {cards.map((item, i) => (
        <div key={i} className="w-full lg:rounded-50px max-lg:rounded-30px overflow-hidden relative group cursor-pointer">
          <img
            src={item.image}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            alt={item.title}
          />
          <div className={`${textHeight} absolute bottom-4 left-0 px-6`}>
            <h4 className={`${headingFont} font-extrabold text-secondary-100 leading-tight`}>
              {item.title}
            </h4>
            {item.description && <p className="text-15px text-secondary-100 ">{item.description}</p> }
            
          </div>
        </div>
      ))}
    </section>
  );
};

export { CategoryGrid };
