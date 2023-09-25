"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const [buttonDisable, setButtonDisalbe] = React.useState(false);

  useEffect(() => {
    if (formData.email.length > 0 && formData.password.length > 0) {
      setButtonDisalbe(false);
    }
  }, [formData]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      setButtonDisalbe(true);
      event.preventDefault();
      const { data } = await axios.post("/api/auth/login", formData);
      if (data.success) {
        router.push("/");
        return;
      }
    } catch (error: any) {
      toast.error("Invalid credentials");
    } finally {
      setButtonDisalbe(false);
    }
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white w-full h-screen">
      <div className="sm:px-10 pt-5 px-4 sm:ml-5">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className="w-36"
        />
      </div>

      <div className="form_container h-full flex justify-center items-center  sm:px-2">
        <div className="px-3 w-full xs:w-[450px] sm:max-w-2xl xs:px-10 sm:px-0">
          <form
            action=""
            method="post"
            className="bg-white rounded-lg w-full sm:w-[375px] shadow-2xl mx-auto py-5 px-2  xs:p-6 "
            onSubmit={submit}
          >
            <Toaster />
            <h2 className="font-extrabold text-3xl pt-2 mt-2">Sign in</h2>
            <p className="text-sm mb-5 mt-1">
              Stay updated on your professional world
            </p>
            <div>
              <input
                type="text"
                className="border  font-semibold text-gray-700  w-full border-gray-600 flex justify-between p-3 outline-none px-2 rounded-md"
                placeholder="Email or Phone"
                name="email"
                value={formData.email}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mt-4">
              <div
                id="password"
                className=" relative top-0 right-0 border border-gray-600 gap-1   p-1 rounded-md"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="border-none flex-1  font-semibold text-gray-700 p-[5px] bg-inherit outline-none"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={inputChangeHandler}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute bg-white z-20 top-0 right-1 font-semibold  sm:font-bold p-2 text-blue-600 border-none outline-none -ml-2"
                >
                  show
                </button>
              </div>
            </div>
            <div className="forgotten_password my-4">
              <Link
                href={"/"}
                className="text-blue-600 hover:bg-blue-200 hover:rounded-full  p-2 hover:underline font-medium xs:font-semibold "
              >
                Forgot password?
              </Link>
            </div>
            <div className="button mt-2">
              <button
                disabled={buttonDisable}
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold p-2 xs:p-4 w-full rounded-full"
              >
                Sign in
              </button>
            </div>

            <div className="google_auth mt-4 pt-1">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full border p-2 xs:p-3 border-gray-700 rounded-full"
              >
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
            <div className="apple_auth mt-4 pt-1">
              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full border p-2 xs:p-3 border-gray-700 rounded-full"
              >
                <Image
                  src={"/apple.svg"}
                  alt="google"
                  width={50}
                  height={50}
                  className="w-4 h-4"
                />
                <span className=" font-bold text-gray-700">
                  Continue with Apple{" "}
                </span>
              </button>
            </div>
          </form>
          <p className="text-center  my-4 pb-8">
            New to LinkedIn?{" "}
            <Link href={"/register"} className="text-blue-600 font-semibold">
              Join now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

/**

 
 */
