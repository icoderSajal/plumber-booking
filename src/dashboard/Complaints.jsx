import { useEffect, useState } from "react";
import axios from "axios";

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const { data } = await axios.get(
          "https://plumber-backend.onrender.com/api/complaints/all",
          { withCredentials: true },
        );

        if (data.success) {
          setComplaints(data.complaints);
        }
      } catch (err) {
        setError("Failed to load complaints");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  const maskMobile = (number) => {
    return "XXXXXX" + number.slice(-4);
  };

  const statusStyles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Completed: "bg-green-100 text-green-700",
    Assigned: "bg-blue-100 text-blue-700",
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">Loading complaints...</div>
    );
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">All Complaints</h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full bg-white rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left text-sm">Name</th>
              <th className="p-3 text-left text-sm">Service</th>
              <th className="p-3 text-left text-sm">Mobile</th>
              <th className="p-3 text-left text-sm">Preferred Date</th>
              <th className="p-3 text-left text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((item) => (
              <tr
                key={item._id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.service}</td>
                <td className="p-3"> {maskMobile(item.mobile)}</td>
                <td className="p-3">
                  {new Date(item.preferredDate).toLocaleDateString()}
                </td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusStyles[item.status]
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 md:hidden">
        {complaints.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">{item.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  statusStyles[item.status]
                }`}
              >
                {item.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium text-gray-800">Service:</span>{" "}
              {item.service}
            </p>

            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium text-gray-800">Mobile:</span>{" "}
              {item.mobile}
            </p>

            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium text-gray-800">Date:</span>{" "}
              {new Date(item.preferredDate).toLocaleDateString()}
            </p>

            <p className="text-sm text-gray-600">
              <span className="font-medium text-gray-800">Issue:</span>{" "}
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Complaints;
