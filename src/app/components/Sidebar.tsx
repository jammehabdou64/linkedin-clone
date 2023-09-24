import Image from "next/image";
import { MdLock, MdBookmark } from "react-icons/md";

const Sidebar = () => {
  const recentItems = (topic:string) => {
    return (
      <div className="flex  text-[13px] font-semibold py-1 px-4 cursor-pointer hover:bg-gray-200  text-gray-500">
        <span className="pr-1">#</span> <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="hidden md:block sidebar top-5 pt-5  sticky w-56  h-fit   text-center">
      <div className="sidebar_top bg-white  border-b-0 border-gray-200 rounded-lg ">
        <div className="flex flex-col items-center">
          <Image
            src={"/bg-img.jpg"}
            alt="cover-img"
            width={50}
            height={10}
            className="-mb-7 object-cover h-[60px] w-full rounded-tl-lg rounded-tr-lg"
          />
          <Image
            src={"/images.png"}
            alt="user"
            width={100}
            height={100}
            className="mb-2 h-16 w-16  rounded-full object-center"
          />
          <h2 className="font-semibold text-lg">Abdou Jammeh</h2>
          <p className="text-xs text-gray-500 py-2">
            software engineer
          </p>
        </div>
        <div className="sidebar_stats   font-semibold  border-t border-gray-200  w-full">
          <div className="py-4 text-gray-500">
            <div className=" w-full  text-xs flex px-4 py-1 cursor-pointer hover:bg-gray-200  justify-between">
              <p>Who viewed you</p>
              <p className="text-blue-600 font-bold">12</p>
            </div>
            <div className="text-xs text-gray-500 px-4 pt-1  cursor-pointer  hover:bg-gray-200  font-semibold  flex justify-between">
              <p className="">impression of your post</p>
              <p className="text-blue-600 font-bold">100</p>
            </div>
          </div>
          <div className=" border-t border-gray-200">
            <div className="w-full hover:bg-gray-200 py-3 cursor-pointer ">
              <p className="text-gray-500 text-[11px] flex pl-3 text-left">
                Access exclusive tools & insights
              </p>
              <h3 className="flex  items-center gap-1 px-4  text-sm ">
                <span>
                  <MdLock className="text-[goldenrod]" />
                </span>
                <span className="underline text-[13.5px]">
                  Try premium for free
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="border-t w-full border-gray-200  ">
          <h3 className="flex items-center gap-2 py-3 px-4 text-[13.5px] font-semibold hover:bg-gray-200 cursor-pointer">
            <span>
              <MdBookmark />
            </span>
            <span>My items</span>
          </h3>
        </div>
      </div>

      <div className="sidebar_bottom text-left py-3 mt-2 rounded-lg bg-white ">
        <h5 className="font-medium text-[13.5px] px-4">Recent</h5>
        {recentItems("Reactjs")}
        {recentItems("Nextjs")}
        {recentItems("Nodejs")}
        {recentItems("programming")}
        {recentItems("expressjs")}
        {recentItems("design")}
      </div>
    </div>
  );
};

export default Sidebar;
