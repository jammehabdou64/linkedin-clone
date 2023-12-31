"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const [buttonDisabled, setButtonDisalbe] = useState(true);

  useEffect(() => {
    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.password.length > 0
    ) {
      setButtonDisalbe(false);
    }
  }, [formData]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setButtonDisalbe(true);
      const { data } = await axios.post("/api/auth/register", formData);
      if (data.success) {
        return window.location.replace("/");
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setButtonDisalbe(false);
    }
  };

  const InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="bg-gray-100 w-full h-screen ">
      <div className="md:px-10 pt-5 px-3 md:ml-5">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className="w-36"
        />
      </div>

      <div className="form_container h-full mt-12 md:mt-10 lg:mt-3 flex justify-center items-center xs:px-4">
        <div className="px-2 w-full xs:w-[450px] sm:w-[42rem] xs:px-10 sm:px-0">
          <h2 className="text-lg mt-10 xs:text-xl sm:text-4xl xs:font-medium">
            Make the most of your professional life
          </h2>
          <form
            action=""
            method="post"
            className="bg-white rounded-lg w-full xs:w-[400px] sm:w-[500px] mx-auto p-6 mt-4"
            onSubmit={submit}
          >
            <Toaster />
            <div>
              <label
                htmlFor="name"
                className="font-semibold text-gray-800 text-sm"
              >
                Name
              </label>
              <input
                type="text"
                className="border hover:bg-gray-200 w-full border-gray-600 flex justify-between py-[6px] outline-none px-2 rounded-md"
                name="name"
                value={formData.name}
                onChange={InputChangeHandler}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="email"
                className="font-semibold text-gray-800 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                className="border hover:bg-gray-200 w-full border-gray-600 flex justify-between py-[6px] outline-none px-2 rounded-md"
                name="email"
                value={formData.email}
                onChange={InputChangeHandler}
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
                className="relative top-0 right-0 border border-gray-600 gap-1   p-1 rounded-md"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="border-none flex-1 p-[5px] bg-inherit outline-none"
                  name="password"
                  value={formData.password}
                  onChange={InputChangeHandler}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute z-20 top-0 right-1 font-semibold  sm:font-bold p-2 text-blue-600 border-none outline-none -ml-2"
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
              <button
                disabled={buttonDisabled}
                className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-3 w-full rounded-full"
              >
                Agree and Join
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
