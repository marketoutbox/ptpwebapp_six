"use client"

export default function Select({ value, onChange, children, className = "", ...props }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 bg-navy-400/50 border border-navy-200/30 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors appearance-none bg-no-repeat bg-[right_0.75rem_center] ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
        backgroundSize: "1.5em 1.5em",
      }}
      {...props}
    >
      {children}
    </select>
  )
}
