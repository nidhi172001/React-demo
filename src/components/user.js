import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function User() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState({
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    birthday: "",
    address: "",
  });
  // console.log("Current editUser state:", editUser);

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(5);

  const indexOfLastUser = currentPage * itemsPerPage;

  const indexOfFirstUser = indexOfLastUser - itemsPerPage;

  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openEditModal = (user) => {
    console.log("User to edit:", user);
    setEditUser(user);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   fetch("https://ex-5n9q.onrender.com/api/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data))
  //     .catch((error) => console.error("Error fetching users:", error));
  // }, []);

  const getUsers = async () => {
    try {
      const response = await axios("https://ex-5n9q.onrender.com/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleDelete = async (id) => {

    try {
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true, 
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"  
}).then(async(result) => {
  if  (result.isConfirmed)
  {
      await axios.delete(`https://ex-5n9q.onrender.com/api/users/${id}`);
      // setUsers(users.filter((user) => user._id !== id));
      await getUsers();
       Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
  }
   
});
    
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    try {
      await axios.put(
        `https://ex-5n9q.onrender.com/api/users/${editUser._id}`,
        editUser,
      );

      await getUsers();

      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6"> User List </h1>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 border"> First Name </th>
                <th className="p-3 border"> Last Name </th>
                <th className="p-3 border"> Email </th>
                <th className="p-3 border"> Gender </th>
                <th className="p-3 border"> Birthday </th>
                <th className="p-3 border"> Address </th>
                <th className="p-3 border"> Action </th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="border p-3"> {user?.firstname} </td>
                  <td className="border p-3"> {user?.lastname} </td>
                  <td className="border p-3"> {user?.email} </td>
                  <td className="border p-3"> {user?.gender} </td>
                  <td className="border p-3">
                    {new Date(user.birthday).toLocaleDateString()}
                  </td>
                  <td className="border p-3"> {user?.address} </td>
                  <td className="border p-3">
                    <button
                      onClick={() => openEditModal(user)}
                      // onClick={() => setShowModal(true)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center items-center gap-4 mt-5">
            <div>
              Rows Per Page:
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));

                  setCurrentPage(1);
                }}
                className="ml-2 border rounded p-1"
              >
                <option value={5}>5</option>

                <option value={10}>10</option>

                <option value={20}>20</option>

                <option value={30}>30</option>
              </select>
            </div>

            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Prev
            </button>

            <span>
              Page {currentPage}
              of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h2 className="text-2xl font-bold mb-5"> Edit User </h2>
            <label className="block text-gray-700 mb-2"> First Name </label>
            <input
              type="text"
              name="firstname"
              value={editUser.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full border p-2 mb-3"
            />
            <label className="block text-gray-700 mb-2"> Last Name </label>
            <input
              type="text"
              name="lastname"
              value={editUser.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full border p-2 mb-3"
            />
            <label className="block text-gray-700 mb-2"> Email </label>
            <input
              type="email"
              name="email"
              value={editUser.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border p-2 mb-3"
            />
            {/* <label className="block text-gray-700 mb-2"> Gender </label>
            <div className="flex gap-6 mb-4">
              {" "}
              <label className="flex items-center gap-2">
                {" "}
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={editUser.gender === "Male"}
                  onChange={handleChange}
                />{" "}
                Male{" "}
              </label>{" "}
              <label className="flex items-center gap-2">
                {" "}
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={editUser.gender === "Female"}
                  onChange={handleChange}
                />{" "}
                Female{" "}
              </label>
            </div>
           
            <label className="block text-gray-700 mb-2"> Birthday </label>
            <input
              type="date"
              name="birthday"
              value={editUser.birthday ? editUser.birthday.split("T")[0] : ""}
              onChange={handleChange}
              className="w-full border p-2 mb-3"
            /> */}
            <label className="block text-gray-700 mb-2"> Address </label>
            <input
              type="text"
              name="address"
              value={editUser.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border p-2 mb-5"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default User;
