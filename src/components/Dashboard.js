import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>

      <button onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Dashboard;