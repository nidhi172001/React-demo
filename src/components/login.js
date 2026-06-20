import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router";
import * as Yup from "yup";
// import { authReducer, initialState } from "./authReducer";

const Login = ({ dispatch }) => {
  console.log(dispatch)
  const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();
  // const [score, dispatch] = useReducer(authReducer, initialState);
  // console.log(score);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <Formik
          onSubmit={async (values) => {
            console.log("Form Values:", values);

            try {
              const response = await axios.post(
                "https://ex-5n9q.onrender.com/api/login",
                {
                  email: values.email,
                  password: values.password,
                },
              );
              console.log("Login Response:", response);
              console.log("Login Response Data:", response.data);
              localStorage.setItem("token", response.data.token);
              dispatch({
                type: "LOGIN",
              });
              navigate("/user");
            } catch (error) {
              console.error("Login error:", error);
            }
          }}
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.email && touched.email ? (
                <div className="text-red-500">{errors.email}</div>
              ) : null}

              {/* Password Field */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {errors.password && touched.password ? (
                <div className="text-red-500">{errors.password}</div>
              ) : null}

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
