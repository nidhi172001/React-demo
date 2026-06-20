import "./App.css";
import Navbar from "./components/navbar";
// import Login from "./components/login";
// import About from "./components/about";
// import Contact from "./components/contact";
// import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router";
// import User from "./components/user";
// import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { lazy, Suspense, useReducer } from "react";
import { authReducer, initialState } from "./components/authReducer";
// import Signup from "./components/signup";


const Home = lazy(() => import("./components/home"));

const Login = lazy(() => import("./components/login"));

const Signup = lazy(() => import("./components/signup"));

const About = lazy(() => import("./components/about"));

const Contact = lazy(() => import("./components/contact"));

const User = lazy(() => import("./components/user"));

const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {

   const [state, dispatch] = useReducer( authReducer, initialState);
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
      <Navbar state={state}
        dispatch={dispatch}/>

      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center">

            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>

          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login dispatch={dispatch}/>} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact email="example@example.com" />}
          />
          <Route path="/user" element={<PrivateRoute><User /></PrivateRoute>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
