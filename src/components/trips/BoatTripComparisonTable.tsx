import type { ComparisonCell, ComparisonRow } from "@/lib/boat-trip-comparison";

function CellIcon({ value }: { value: ComparisonCell }) {
  if (value === true) {
    return <span className="text-green-600 font-bold" aria-label="Yes">✓</span>;
  }
  if (value === "partial") {
    return <span className="text-amber-600 font-medium text-sm" aria-label="Limited">Limited</span>;
  }
  return <span className="text-gray-400 font-bold" aria-label="No">✗</span>;
}

type Props = {
  rows: ComparisonRow[];
  title?: string;
  className?: string;
};

export default function BoatTripComparisonTable({
  rows,
  title = "How Salvador Ibiza Compares",
  className = "",
}: Props) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          {title}
        </h2>
      )}
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full min-w-[540px] text-left text-sm md:text-base">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 font-semibold text-gray-800">Feature</th>
              <th className="px-4 py-3 font-semibold text-green-700">Salvador Ibiza</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Typical Party Boat</th>
              <th className="px-4 py-3 font-semibold text-gray-600">Shared Catamaran</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
              >
                <td className="px-4 py-3 font-medium text-gray-800">{row.feature}</td>
                <td className="px-4 py-3 text-center">
                  <CellIcon value={row.salvador} />
                </td>
                <td className="px-4 py-3 text-center">
                  <CellIcon value={row.partyBoat} />
                </td>
                <td className="px-4 py-3 text-center">
                  <CellIcon value={row.catamaran} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">
        Comparison based on typical Ibiza shared trips. &quot;Limited&quot; means sometimes available or restricted.
      </p>
    </div>
  );
}
