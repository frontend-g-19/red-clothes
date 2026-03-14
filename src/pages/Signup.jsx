import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="flex justify-center mt-24 px-5">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-[#750000] mb-2 text-center">
          Create Account
        </h1>

        <p className="text-gray-500 mb-8 text-center">
          Sign up to start shopping
        </p>

        <form className="flex flex-col gap-5">
          {/* NAME */}
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-[#750000]"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-[#750000]"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-[#750000]"
          />

          {/* CONFIRM PASSWORD */}
          {/* <input
            type="password"
            placeholder="Confirm password"
            className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-[#750000]"
          /> */}

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-[#750000] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#5e0000] transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to={"/login"}>
            <span className="text-[#750000] font-semibold cursor-pointer hover:underline">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
