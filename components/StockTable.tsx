export default function StockTable({ stocks }) {
  if (stocks.length === 0)
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No data available.</p>
      </div>
    )

  return (
    <div className="mt-6 overflow-hidden rounded-lg shadow">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-navy-200/30">
          <thead className="bg-navy-400/70">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Symbol
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Open
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                High
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Low
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Close
              </th>
            </tr>
          </thead>
          <tbody className="bg-navy-500/40 divide-y divide-navy-200/20">
            {stocks.map((stock, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-navy-500/20" : "bg-navy-500/40"}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{stock.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gold-400">{stock.symbol}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{stock.open.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{stock.high.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{stock.low.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{stock.close.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
