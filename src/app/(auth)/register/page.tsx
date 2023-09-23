"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-gray-100 w-full h-screen ">
      <div className="px-10 pt-5 ml-5">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className="w-36"
        />
      </div>

      <div className="form_container h-full flex justify-center items-center px-2">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-medium">
            Make the most of your professional life
          </h2>
          <form
            action=""
            method="post"
            className="bg-white rounded-lg w-[420px] mx-auto p-6 mt-4"
          >
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-gray-800 text-sm"
              >
                Email
              </label>
              <input
                type="text"
                className="border hover:bg-gray-200 w-full border-gray-600 flex justify-between py-[6px] outline-none px-2 rounded-md"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="font-semibold text-gray-800 text-sm"
              >
                Password (6+ characters)
              </label>
              <div
                id="password"
                className=" hover:bg-gray-200 border border-gray-600 gap-1 flex justify-between  px-2 p-1 rounded-md"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="border-none flex-1 p-[5px] bg-inherit outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="font-bold text-blue-600 border-none outline-none"
                >
                  show
                </button>
              </div>
            </div>
            <div>
              <p className="text-center text-gray-500 text-[13px] px-4 mt-2 py-2">
                By clicking Agree & Join, you agree to the LinkedIn{" "}
                <span className="font-bold text-blue-600">
                  User Agreement, Privacy Policy,{" "}
                </span>{" "}
                and{" "}
                <span className="font-bold text-blue-600">Cookie Policy.</span>
              </p>
            </div>
            <div className="button mt-2">
              <button className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-3 w-full rounded-full">
                Agree and Join
              </button>
            </div>
            <div className="my-2 mt-3 pt-3">
              <hr className="text-gray-600 mt-3" />
              <p className="text-center -mt-[12px] bg-white w-14 mx-auto px-2">
                or
              </p>
            </div>
            <div className="google_auth mt-4 pt-1">
              <button className="flex items-center justify-center gap-2 w-full border p-2  border-gray-700 rounded-full">
                <Image
                  src={"/google.svg"}
                  alt="google"
                  width={50}
                  height={50}
                  className="w-4 h-4"
                />
                <span className="text-sm text-gray-700">
                  Continue with Google{" "}
                </span>
              </button>
            </div>

            <p className="mt-7 text-center">
              Already on LinkedIn?{" "}
              <Link href={"/login"} className="text-blue-600 font-semibold">
                {" "}
                Sign in
              </Link>
            </p>
          </form>
          <p className="text-center text-sm my-4 pb-8">
            Looking to create a page for a business?{" "}
            <span className="text-blue-600 font-semibold">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
