export default function DataTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-50">
          <tr className="text-gray-600">
            <th className="p-3 text-left">Invoic</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {[1,2,3,4,5].map((item,i)=>(
            <tr key={i} className="border-b hover:bg-gray-50 transition">
              <td className="p-3">#INV-00{i+1}</td>
              <td className="p-3">Sarah Jhon</td>
              <td className="p-3">$295.50</td>
              <td className="p-3">
                <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">Paid</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}