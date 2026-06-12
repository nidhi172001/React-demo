import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import About from "./components/about";
import Contact from "./components/contact";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router";
import User from "./components/user";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact email="example@example.com" />}
          />
          <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
