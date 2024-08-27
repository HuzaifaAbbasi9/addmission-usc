import React from "react";

interface FeatureCardProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  backgroundImage,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="relative lg:rounded-50px max-lg:rounded-30px group overflow-hidden cursor-pointer">
      <img src={backgroundImage} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" alt={title} />
      <div className="absolute lg:bottom-8 max-lg:bottom-5 left-0 w-full lg:px-8 max-lg:px-5">
        <h2
          className="font-extrabold text-white lg:text-40px max-lg:text-30px"
          style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 4px 4px" }}
        >
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-white lg:text-36px max-lg:text-22px">
            {subtitle}
          </h3>
        )}
        {description && <p className="text-white text-sm">{description}</p>}
      </div>
    </div>
  );
};

export { FeatureCard };
