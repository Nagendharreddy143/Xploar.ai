import React from 'react';

const Badge = React.forwardRef(({ variant = "default", className = "", children, ...props }, ref) => {
  const variants = {
    default: "bg-gray-900 text-gray-50 hover:bg-gray-900/80",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
    destructive: "bg-red-500 text-gray-50 hover:bg-red-500/80",
    outline: "text-gray-700 border border-gray-200 hover:bg-gray-100"
  };
  
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Badge.displayName = "Badge";

export { Badge };
