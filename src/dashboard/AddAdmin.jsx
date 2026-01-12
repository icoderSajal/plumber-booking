const AddAdmin = () => {
  return (
    <>
      <div className="p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
        <input className="border p-2 w-full mb-3" placeholder="Name" />
        <input className="border p-2 w-full mb-3" placeholder="Email" />
        <input className="border p-2 w-full mb-3" placeholder="Password" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Admin
        </button>
      </div>
    </>
  );
};

export default AddAdmin;
