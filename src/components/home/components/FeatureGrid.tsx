import { FeatureCard } from "../../FeatureCard";

interface Card {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description?: string;
}

interface CategoryGridProps {
  cards: Card[];
  hasBg?: boolean;
}

const FeatureGrid: React.FC<CategoryGridProps> = ({ cards, hasBg = true }) => {
  return (
    <section className="custom-container lg:py-20 max-lg:py-8 relative">
      <div className="grid grid-cols-2 gap-5 relative z-[1]">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            backgroundImage={card.backgroundImage}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
          />
        ))}
      </div>
      {hasBg && (
        <div className="absolute top-0 left-0 w-full h-[280px] bg-[url('/grid-bg-wave.svg')] bg-cover bg-no-repeat z-[0]"></div>
      )}
    </section>
  );
};

export { FeatureGrid };
