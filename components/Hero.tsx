import React from 'react';

interface HeroProps {
  title: string;
  image: string;
  subtitle?: string;
  heightClass?: string;
  hideContent?: boolean;
  disableZoom?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, image, subtitle, heightClass = "h-[40vh] min-h-[300px]", hideContent = false, disableZoom = false }) => {
  return (
    <div className={`relative w-full ${heightClass} overflow-hidden flex items-center justify-center`}>
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover ${!disableZoom ? 'transition-transform duration-1000 hover:scale-105' : ''}`}
        />
        {!hideContent && <div className="absolute inset-0 bg-primary/40 backdrop-blur-[1px]"></div>}
      </div>
      {!hideContent && (
        <div className="relative z-10 text-center px-4 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-widest uppercase drop-shadow-lg mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-lg md:text-xl font-light tracking-wide font-serif italic">
              {subtitle}
            </p>
          )}
          <div className="mt-6 w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default Hero;