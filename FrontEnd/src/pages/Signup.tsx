import { useState } from "react";
import { Link } from "react-router";
import login from "../assets/Login.jpg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("user Registered:", { name, email, password });
  };

  return (
    <div className="flex">
      <div className=" md:w-1/2 w-full flex justify-center md:justify-end items-center  p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-wide uppercase mb-6 text-center">
            Stylezone
          </h2>

          <h2 className="text-3xl font-bold text-center mb-8">Hey There!👋</h2>
          <p className="text-lg text-center mb-6">
            Enter your username and password to login
          </p>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-xl"
              placeholder="Enter you Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-xl"
              placeholder="Enter you email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-md font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-xl"
              placeholder="Enter you password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden md:block">
        <div className=" mt-2 ">
          <img src={login} alt="login" className="w-120 h-200 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
