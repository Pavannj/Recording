import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Recording from "./Recording";

function Login() {
  let {data,setData}=useState([])
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = (login) => {
    localStorage.setItem("login", JSON.stringify(login));
    console.log(login)
    navigate("/recording")
  };

  return (
    <form id="Login" onSubmit={handleSubmit(onsubmit)}>
      <legend style={{ textAlign: "center" }}> SIGN IN</legend>
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        {...register("email", {
          required: "Email is required",
          validate: {
            maxLength: (v) =>
              v.length <= 50 || "The email should have at most 50 characters",
            matchPattern: (v) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
              "Email address must be a valid address",
          },
        })}
      />
      {errors.email?.message && (
        <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>
      )}
      <label htmlFor="Password">Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        {...register("password", {
          required: "You must specify a password",
          validate: {
            minLength: (v) =>
              v.length >= 8 || "Password must contain 8 characters",
            maxLength: (v) =>
              v.length <= 15 || "Password must be less than 15 characters",
            matchPattern: (v) =>
              /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(
                v
              ) ||
              "Password must contain one uppercase,one lowercase,one numeric and one special character",
          },
        })}
      />
      {errors.password?.message && (
        <p style={{ color: "red", fontSize: "12px" }}>
          {errors.password.message}
        </p>
      )}

      <button type="submit">Sign In</button>
    </form>
  );
}

export default Login;
