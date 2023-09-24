import Image from "next/image";
import {
  MdCalendarViewDay,
  MdEvent,
  MdImage,
  MdSubscriptions,
} from "react-icons/md";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed mx-auto flex-1 md:max-w-[550px] lg:max-w-[600px] px-3 sm:px-0 sm:mx-5 mt-5">
      <div className="feed_input_container bg-white p-3  mb-5 rounded-xl">
        <div className="flex gap-2">
          <Image
            src={"/abdou.jpg"}
            width={60}
            height={60}
            alt="user-photo"
            className="w-12 h-12 rounded-full object-center"
          />
          <div className="feed_input border flex-1  border-gray-400 rounded-[30px] pl-4 flex p-[11px] text-gray-500">
            <form action="" className="w-full flex">
              <input
                type="text"
                className="outline-none flex-1 text-sm font-semibold text-gray-400"
                placeholder="start a post "
              />
              <button type="submit" className="hidden">
                send
              </button>
            </form>
          </div>
        </div>
        <div className="input_option flex justify-between pt-1 mt-1">
          <div className="flex p-2 gap items-center cursor-pointer hover:bg-gray-200">
            <MdImage className="text-blue-500" size={25} />
            <p className="text-sm text-gray-500 font-bold">Photo</p>
          </div>
          {/* <div className="flex p-2 gap items-center cursor-pointer hover:bg-gray-200">
            <MdSubscriptions className="text-green-600" size={25} />
            <p className="text-sm text-gray-500 font-bold">Video</p>
          </div> */}
          <div className="flex p-2 gap items-center cursor-pointer hover:bg-gray-200">
            <MdEvent className="text-yellow-600" size={25} />
            <p className="text-sm text-gray-500 font-bold">Event</p>
          </div>
          <div className="flex p-2 gap items-center cursor-pointer hover:bg-gray-200">
            <MdCalendarViewDay className="text-red-600" size={25} />
            <p className="text-sm text-gray-500 font-bold">Write article</p>
          </div>
        </div>
      </div>

      <div className="posts">
        {[...new Array(10)].map((post, index) => (
          <Post key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
