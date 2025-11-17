import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
console.log("Login rendered");
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Frontend-only: You can handle form validation or mock login here if needed
    console.log(`${state} Login Attempt:`, { email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="min-h-[80vh] flex items-center justify-center bg-gray-50"
    >
      <div className="flex flex-col gap-5 bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
        <p className="text-xl font-semibold text-gray-700 mb-2 text-center">
          {state} Login
        </p>

        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-600 mb-1">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter your email"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-600 mb-1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter your password"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>

        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-blue-600 underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}

        <div className="text-xs text-gray-500 text-center mt-2">
          © 2025 Acumed Admin Portal
        </div>
      </div>
    </form>
  );
};

export default Login;
