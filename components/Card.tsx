export default function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-navy-500/80 backdrop-blur-sm rounded-lg shadow-lg ${className} overflow-hidden`}>
      {title && (
        <div className="px-6 py-4 border-b border-navy-200/30">
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
    </div>
  )
}
