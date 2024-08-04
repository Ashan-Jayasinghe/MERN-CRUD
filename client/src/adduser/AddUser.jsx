import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" type="Link " class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>
      <h3>Add New USer</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            autoComplete="off"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label>E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <label>Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter Your Address"
            onChange={inputHandler}
          />
        </div>
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
