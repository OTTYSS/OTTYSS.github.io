import React from 'react';

// Use a union type to allow either Button or Anchor attributes based on usage
type P5ButtonProps = {
  variant?: 'primary' | 'secondary' | 'black';
  skew?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
} & (
  | React.ButtonHTMLAttributes<HTMLButtonElement>
  | React.AnchorHTMLAttributes<HTMLAnchorElement>
);

export const P5Button: React.FC<P5ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  skew = true,
  href,
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 font-bold uppercase tracking-widest transition-all duration-200 group overflow-hidden border-2 inline-flex justify-center items-center cursor-pointer";
  
  const variants = {
    // Primary: Blue background, white text
    primary: "bg-[#2c5bf0] text-white border-white hover:bg-white hover:text-[#2c5bf0] hover:border-[#2c5bf0]",
    // Secondary: Black background, blue border
    secondary: "bg-black text-white border-[#2c5bf0] hover:bg-[#2c5bf0] hover:text-white",
    // Black: Pure black
    black: "bg-black text-white border-gray-800 hover:bg-gray-900"
  };

  const combinedClassName = `${baseStyles} ${skew ? '-skew-x-12' : ''} ${variants[variant]} ${className}`;

  // Interactive content (decorative shine)
  const content = (
    <>
      <span className={`block ${skew ? 'skew-x-12' : ''} flex items-center gap-2`}>
        {children}
      </span>
      {/* Decorative shine on hover */}
      <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-75 pointer-events-none" />
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};