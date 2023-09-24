import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { MdLock } from "react-icons/md";
import { AuthContext } from "../contex/AuthContext";

const Modal = () => {
  const router = useRouter();
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/auth/logout");
      return router.push("/login");
    } catch (error) {}
  };

  const {
    state: { user },
  } = useContext(AuthContext);
  const auth: any = user;

  return (
    <div className="absolute mt-4 -ml-56 z-40 bg-white shadow-md w-64 p-2">
      <div className="flex gap-1 mb-2 items-center">
        <Image
          src={"/images.png"}
          alt="user"
          width={100}
          height={100}
          className="mb-2 h-14 w-14  rounded-full object-center"
        />
        <div>
          <h2 className="font-semibold ">{auth?.name}</h2>
          <p className="text-sm text-gray-500">software engineer</p>
        </div>
      </div>
      <Link
        className="border-blue-600 border w-full block text-center rounded-full text-blue-600 p-[3px] text-sm"
        href={"/"}
      >
        view profile
      </Link>
      <div className="px-1">
        <h1 className="font-semibold mt-4">Account</h1>
        <h3 className="flex  items-center gap-1 px-4 my-2  hover:text-blue-700 ">
          <span>
            <MdLock className="text-[goldenrod]" />
          </span>
          <span className="underline text-[13.5px]">Try premium for free</span>
        </h3>
        <ul className="text-gray-600 text-[15px] mt-3">
          <li className="hover:underline">Settings & privacy</li>
          <li className="hover:underline my-1">Help</li>
          <li className="hover:underline">Language</li>
        </ul>
      </div>
      <div className="mt-5 px-1">
        <h1 className="font-semibold mt-4">Manage</h1>
        <ul className="text-gray-600 text-[15px] mt-3">
          <li className="hover:underline">Post & Activity</li>
          <li className="hover:underline my-2">Job Posting Account</li>
          <li className="hover:underline" onClick={() => logout()}>
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
