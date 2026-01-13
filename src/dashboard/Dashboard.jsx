import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const { data } = await axios.get(
          "https://plumber-backend.onrender.com/api/complaints/all",
          { withCredentials: true }
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

  const fetchQueries = async () => {
    try {
      const { data } = await axios.get(
        "https://plumber-backend.onrender.com/api/queries/all"
      );

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
    <>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Plumbers</p>
          <h3 className="text-2xl font-bold mt-2">12</h3>
        </div> */}

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 font-bold">Total Complaints</p>
          <h3 className="text-2xl font-bold mt-2">{complaints.length}</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500 font-bold">Pending Queries</p>
          <h3 className="text-2xl font-bold mt-2">{queries.length}</h3>
        </div>

        {/* <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Admins</p>
          <h3 className="text-2xl font-bold mt-2">{complaints.length}3</h3>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
