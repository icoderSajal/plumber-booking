import { useEffect, useState } from "react";
import axios from "axios";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchQueries = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/queries/all");

      if (data.success) {
        setQueries(data.queries);
      }
    } catch (error) {
      console.error("Error fetching queries", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6">Customer Queries</h2>

      {loading && <p className="text-gray-500 text-sm">Loading queries...</p>}

      {!loading && queries.length === 0 && (
        <p className="text-gray-500 text-sm">No queries found.</p>
      )}

      <div className="grid gap-4">
        {queries.map((query) => (
          <div
            key={query._id}
            className="bg-white shadow rounded-xl p-4 border hover:shadow-md transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <p className="font-semibold text-gray-800">{query.name}</p>
                <p className="text-sm text-gray-500">
                  {query.email} • {query.mobile}
                </p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full w-fit ${
                  query.status === "New"
                    ? "bg-blue-100 text-blue-700"
                    : query.status === "Resolved"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {query.status}
              </span>
            </div>

            <p className="mt-3 text-gray-700 text-sm">{query.message}</p>

            <p className="mt-2 text-xs text-gray-400">
              Submitted on {new Date(query.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queries;
