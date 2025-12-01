export default function StatCard({ title, value, subtitle, accent }) {
  return (
    <div className={`bg-gradient-to-r ${accent} text-white rounded-xl p-6 shadow-md`}>
      <p className="text-sm opacity-80">{title}</p>
      <h2 className="text-2xl font-bold mt-1">{value}</h2>
      <p className="text-xs opacity-90 mt-2">{subtitle}</p>
    </div>
  );
}
