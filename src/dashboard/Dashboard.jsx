

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Plumbers</p>
          <h3 className="text-2xl font-bold mt-2">12</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Total Complaints</p>
          <h3 className="text-2xl font-bold mt-2">35</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Pending Queries</p>
          <h3 className="text-2xl font-bold mt-2">8</h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-sm text-gray-500">Admins</p>
          <h3 className="text-2xl font-bold mt-2">3</h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
