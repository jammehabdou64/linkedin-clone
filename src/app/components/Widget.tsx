import Image from "next/image";
import React from "react";
import { MdAdd, MdInfo } from "react-icons/md";

const Widget = () => {
  return (
    <div className="hidden lg:block widget w-80 top-5 pt-5 sticky h-fit">
      <div className="widget_header  bg-white  px-2 pt-4 pb-14 rounded-lg ">
        <div className="flex items-center justify-between">
          <h2>Add to your feed</h2>
          <MdInfo />
        </div>

        <div className="widget_follow_user">
          {[...new Array(3)].map((user, index) => (
            <div className="flex items-center gap-2 p-2 pt-3 mt-6" key={index}>
              <Image
                src={"/images.png"}
                alt="user"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 "
              />
              <div className="flex flex-col justify-center -mb-10">
                <h4 className="font-bold text-sm">Babucarr Jammeh</h4>
                <p className="text-gray-500 text-xs  ">
                  Lorem, ipsum dolor sit amet consectetur.
                </p>
                <div className="mt-2">
                  <button className="flex items-center border rounded-full hover:bg-gray-200 py-1 border-gray-500 font-semibold  text-gray-500 w-24 px-3">
                    <MdAdd size={19} /> <span>follow</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widget;
