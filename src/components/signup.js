import React from "react";
import { Formik, Form,  ErrorMessage } from "formik";
import * as Yup from "yup";
// import axios from "axios";
// import Users from "./users";
// import { useNavigate } from "react-router";



const SignupSchema = Yup.object({
  firstname: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("First Name is required"),

  lastname: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Last Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),

  gender: Yup.string()
    .required("Please select gender"),

  contact: Yup.string()
    .min(10, "Minimum 10 numbers")
    .required("Please select Contct"),

  hobbies: Yup.array()
    .min(1, "Select at least one hobby"),


});

function Signup() {

  //const [users, setUsers] = useState([]);
  //const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "50px auto",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        background: "#fff",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Signup Form</h2>

      <Formik

        onSubmit={async (values) => {
          // alert(JSON.stringify(values, null, 2));
          console.log(values);

          // try {
          //   const response = await axios.post("https://ex-5n9q.onrender.com/api/register",
          //     {
          //       firstname: values.firstname,
          //       lastname: values.lastname,
          //       email: values.email,
          //       password: values.password,
          //       confirmPassword: values.confirmPassword,
          //       gender: values.gender,
          //       contact: values.contact,
          //       //city: "",
          //       //hobbies: []

          //     }
          //   );
          //   console.log("Login Response:", response)
          //   console.log("Login Response Data:", response.data)
          //   localStorage.setItem("token", "123456789");
          //   navigate("/users");

          // }
          // catch (error) {
          //   console.error("Login error:", error);
          // }
        }}
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: "",
          contact: "",
          //city: "",
          //hobbies: []
        }}
        validationSchema={SignupSchema}

      >

        {({ values, errors }) => (

          <Form>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <label >First Name</label>
              <label>Last Name</label>

            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                name="firstname"
                 value={values.firstname}
                placeholder="First name"
                className="border rounded-md p-3 w-full"
              />

              <input
                type="text"
                name="lastname"
                 value={values.lastname}
                placeholder="Last name"
                className="border rounded-md p-3 w-full"
              />

            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label>
                <ErrorMessage
                  value=""
                  name="firstname"
                  component="div"
                  style={{ color: "red" }}
                />
              </label>
              <label>
                <ErrorMessage
                  name="lastname"
                  component="div"
                  style={{ color: "red" }}
                />
              </label>

            </div>
            {/* contact number & email*/}
            {/* <div className="grid grid-cols-2 gap-3 mb-3">
              <label className="block mb-2">Contact Number</label>
              <label className="block mb-2">Email</label>

            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label>
                <input
                  type="text"
                  name="contact"
                  value={values.contact}
                  placeholder="Enter Contact Number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus"
                />
              </label>
              <label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Enter your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus"

                />
              </label>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label>
                <ErrorMessage
                  name="contact"
                  component="div"
                  style={{ color: "red" }}
                />
              </label>
              <label>
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red" }}
                />
              </label>
            </div> */}


            {/* Gender */}
            {/* <div className="grid grid-cols-3 gap-3 mb-3">
              <label className="block text-lg font-medium mb-2">
                Gender
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <Field type="radio" name="gender"
                //value={values.gender}
                />
                <span>Male</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender"

                //value={values.gender}

                />
                <span>Female</span>
              </label>
            </div>
            <div className="mb-4">
              <label>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </label>
            </div> */}

            {/* Hobbies */}

            {/* <div className="grid grid-cols-4 gap-3 mb-3">
              <label className="block mb-2">Hobbies</label>


              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Reading"
                />{" "}
                Reading
              </label>

              <label style={{ marginLeft: "15px" }}>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Traveling"
                />{" "}
                Traveling
              </label>

              <label style={{ marginLeft: "15px" }}>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="Gaming"
                />{" "}
                Gaming
              </label>
            </div>
            <div className="mb-4">
              <ErrorMessage
                name="hobbies"
                component="div"
                style={{ color: "red" }}
              />
            </div> */}


            {/* Password & confirm password */}
            {/* <div className="grid grid-cols-2 gap-3 mb-3">
              <lable>Password</lable>
              <label>Confirm Password</label>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">

              <input
                type="password"
                name="password"
                value={values.password}
                placeholder="Enter your Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus"

              />

              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="Enter Confirm Passwrd"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus"

              />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <label>
                <ErrorMessage
                  name="password"
                  component="div"
                  style={{ color: "red" }}
                />

              </label>
              <label>
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  style={{ color: "red" }}
                />

              </label>
            </div> */}

            {/* <label className="block mb-2">Select City</label>
            <div>
              <label>

                <select  
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus"
>
                <option name="city" value="Navsari">Navsari</option>
                <option name="city" value="Surat">Surat</option>
              </select>

                <Field

                as="select"
                name="city"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus"

              >
                <option value="">Select City</option>
                <option value="Surat">Surat</option>
                <option value="Navsari">Navsari</option>
                <option value="Vadodara">Vadodara</option>
              </Field>
              </label>

            </div>
            <ErrorMessage
              name="city"
              component="div"
              style={{ color: "red" }}
            /> */}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Signup
            </button>
          </Form>
        )}


      </Formik>
    </div>
  );
}

export default Signup;