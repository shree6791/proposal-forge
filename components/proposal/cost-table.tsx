interface CostTableProps {
  costs: {
    monthlyCost: number;
    year1Cost: number;
    year2Cost: number;
    year3Cost: number;
  };
}

export function CostTable({ costs }: CostTableProps) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
      <table className="table-auto w-full text-center border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="border px-4 py-2">Metric</th>
            <th className="border px-4 py-2">Year 1</th>
            <th className="border px-4 py-2">Year 2</th>
            <th className="border px-4 py-2">Year 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Monthly Cost</td>
            <td className="border px-4 py-2">${costs.monthlyCost.toFixed(2)}</td>
            <td className="border px-4 py-2">-</td>
            <td className="border px-4 py-2">-</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Yearly Cost</td>
            <td className="border px-4 py-2">${costs.year1Cost.toFixed(2)}</td>
            <td className="border px-4 py-2">${costs.year2Cost.toFixed(2)}</td>
            <td className="border px-4 py-2">${costs.year3Cost.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 bg-white p-4 rounded-lg border border-blue-900">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Pricing Assumptions:</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Pricing excludes VAT and local taxes.</li>
          <li>Year 2 and Year 3 pricing is valid for a 3-year contract.</li>
          <li>Year-over-year productivity benefits are applied to pricing.</li>
        </ul>
      </div>
    </div>
  );
}