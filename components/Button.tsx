"use client"

export default function Button({ children, onClick, disabled = false, primary = false, className = "" }) {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-600 transition-all shadow-sm"

  const variantClasses = primary
    ? "bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-navy-700 focus:ring-gold-400 disabled:opacity-60 disabled:from-gold-400 disabled:to-gold-400"
    : "bg-navy-300 hover:bg-navy-200 text-foreground focus:ring-navy-200 disabled:bg-navy-400 disabled:opacity-60"

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className} ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  )
}
