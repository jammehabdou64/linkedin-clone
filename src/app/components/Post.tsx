import Image from "next/image";
import {
  MdOutlineChat,
  MdOutlineSend,
  MdOutlineShare,
  MdOutlineThumbUp,
} from "react-icons/md";

const Post = () => {
  return (
    <div className="post rounded-xl bg-white p-4 mt-3 mb-3">
      <div className="post_header flex items-center mb-3">
        <Image
          src={"/abdou.jpg"}
          alt="post author"
          width={70}
          height={60}
          className="w-12 h-12 rounded-full"
        />
        <div className="post_info ml-3">
          <h3 className="font-extrabold text-[15px]">Abdou Jammeh</h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
      <div className="post_body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        dicta necessitatibus eius iste fugit corporis autem mollitia quasi saepe
        perferendis, sequi architecto explicabo impedit repellat voluptate et
        aliquid reiciendis qui?
      </div>
      <div className="post_button flex justify-evenly mt-1 pt-1">
        <div className="flex p-2 items-center cursor-pointer hover:bg-gray-200">
          <MdOutlineThumbUp size={22} />
          <p className=" text-gray-500 font-semibold">Like</p>
        </div>
        <div className="flex p-2 items-center cursor-pointer hover:bg-gray-200">
          <MdOutlineChat size={22} />
          <p className=" text-gray-500 font-semibold">comment</p>
        </div>
        <div className="flex p-2 items-center cursor-pointer hover:bg-gray-200">
          <MdOutlineShare size={22} />
          <p className=" text-gray-500 font-semibold">share</p>
        </div>
        <div className="flex p-2 items-center cursor-pointer hover:bg-gray-200">
          <MdOutlineSend size={22} />
          <p className=" text-gray-500 font-semibold">send</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
