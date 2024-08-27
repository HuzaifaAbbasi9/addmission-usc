import React from 'react';

interface FeatureCardProps {
  backgroundImage: string;
  title: string;
  subtitle?: string; 
  description?: string; 
}

const FeatureCard: React.FC<FeatureCardProps> = ({ backgroundImage, title, subtitle, description }) => {
  return (
    <div
      className="h-[400px] bg-cover bg-center rounded-[50px] p-8 flex"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="self-end">
        <h2 className="font-extrabold text-white text-[40px]" style={{ textShadow: "rgba(0, 0, 0, 0.5) 0px 4px 4px" }}>
          {title}
        </h2>
        {subtitle && <h3 className='text-white lg:text-[36px] max-lg:text-[28px]'>{subtitle}</h3>}
        {description && <p className='text-white text-sm'>{description}</p>}
      </div>
    </div>
  );
};

export { FeatureCard };
