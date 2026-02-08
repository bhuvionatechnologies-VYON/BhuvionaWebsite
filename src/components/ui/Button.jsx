import React from "react";

export default function Button({ 
  children, 
  variant = "outline", 
  ariaLabel,
  disabled = false,
  type = "button",
  onClick,
  className = "",
  ...props 
}) {
  const baseClassName = variant === "solid" ? "btn btn-solid" : "btn btn-outline";
  const finalClassName = `${baseClassName} ${className}`.trim();
  
  return (
    <button 
      className={finalClassName}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
