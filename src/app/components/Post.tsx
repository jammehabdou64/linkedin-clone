import Image from "next/image";
import {
  MdOutlineChat,
  MdOutlineSend,
  MdOutlineShare,
  MdOutlineThumbUp,
} from "react-icons/md";
import Moment from "react-moment";


type PostType={
  author?:any,
  _id?:string,
  text?:string,
  createdAt?:string
}


const Post = ({post}:{post:PostType}) => {
  return (
    <div className="post rounded-xl bg-white p-4 mt-3 mb-3">
      <div className="post_header flex items-center mb-3">
        <Image
          src={"/images.png"}
          alt="post author"
          width={70}
          height={60}
          className="w-12 h-12 rounded-full"
        />
        <div className="post_info ml-3">
          <div className="flex items-center gap-1">

          <h3 className="font-extrabold text-[15px]">{post?.author?.name}</h3>
          <span className="text-sm text-gray-500"><Moment fromNow>
            {post?.createdAt}
            </Moment></span>
          </div>
          <p className="text-sm text-gray-500">
            software engineer
          </p>
        </div>
      </div>
      <div className="post_body">
       {post?.text}
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
