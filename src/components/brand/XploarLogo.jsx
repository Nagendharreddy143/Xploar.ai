import React from "react";

export default function XploarLogo({
  size = 48,
  iconColor = "#06b6d4",      // teal arrow
  dotColor = "#1e40af",       // navy dots
  showText = false,
  textColor = "#1e40af",
  className = "",
}) {
  const px = typeof size === "number" ? `${size}px` : size;
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} style={{ height: px }}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 100 100"
        fill="none"
        aria-label="Xploar logo"
        role="img"
      >
        {/* Diagonal arrow */}
        <path d="M20 80 L80 20" stroke={iconColor} strokeWidth="12" strokeLinecap="round" />
        {/* Arrow head */}
        <path d="M66 22 L80 20 L78 34" stroke={iconColor} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        {/* Three dots */}
        <circle cx="36" cy="64" r="9" fill={dotColor} />
        <circle cx="50" cy="50" r="9" fill={dotColor} />
        <circle cx="60" cy="70" r="9" fill={dotColor} />
      </svg>

      {showText && (
        <span className="font-space-grotesk font-bold leading-none" style={{ color: textColor, fontSize: `calc(${px} * 0.45)` }}>
          xploar.ai
        </span>
      )}
    </span>
  );
}
