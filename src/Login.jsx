import React, { useState } from "react";
import "./css/signup.css";
import bg from "./images/13824.jpg";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, username } = credentials;
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, username }),
      });
      const json = await response.json();
      if (json.jwt_data) {
        localStorage.setItem("token", json.jwt_data);
        navigate("/Profile");
      }
    } catch (error) {
      console.error("login error:", error);
      alert("An error occurred while login");
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container">
        <div className="leftarea">
          <img src={bg} alt="" />
        </div>
        <div className="rightarea">
          <p className="member">
            Don't have account? <a href="/">Create Account</a>
          </p>
          <h1>Sign In to Dribbble</h1>
          <form onSubmit={handleSubmit}>
            <div className="nameandusername">
              <div className="mb-3 name">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3 username">
                <label htmlFor="username" className="form-label">
                  UserName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  onChange={handleChange}
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label checkMe" htmlFor="exampleCheck1">
                Creating an account means you're okay with our{" "}
                <span>
                  Terms of <br />
                  Services, Privacy Policy
                </span>{" "}
                and your default{" "}
                <span>
                  {" "}
                  Notification <br />
                  Settings
                </span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary create-button">
              Login
            </button>
            <p className="form-check-label note" htmlFor="exampleCheck1">
              This site is protected by reCAPTCHA and Google <br />
              <span> Privacy Policy</span> and <span> Terms of Service </span> apply
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
