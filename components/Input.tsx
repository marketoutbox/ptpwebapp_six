"use client"

export default function Input({ type = "text", placeholder, value, onChange, className = "", ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 bg-navy-400/50 border border-navy-200/30 rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${className}`}
      {...props}
    />
  )
}
