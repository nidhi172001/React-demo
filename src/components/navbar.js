import { Link } from "react-router";


function Navbar({
  state,

  dispatch,
}) {
  console.log(state)
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">MyApp</div>
          <div className="space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
            <Link to="/user" className="text-gray-300 hover:text-white">
              User
            </Link>
            {/* <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
            <Link to="/signup" className="text-gray-300 hover:text-white">Signup</Link>
            <div>
              <button

              onClick={handleLogout}

              className="bg-red-500 text-white px-4 py-2 rounded"

            >

              Logout

            </button>
            </div> */}
            {!state.isLoggedIn ? (
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
