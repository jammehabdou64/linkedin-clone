"use client";
import Image from "next/image";
import { MdCalendarViewDay, MdEvent, MdImage } from "react-icons/md";
import Post from "./Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import Loading from "./Loading";
import { PostsContext } from "../contex/PostContext";
import { PostFeedModalContext } from "../contex/PostFeedModalContext";

const Feed = () => {
  const {
    state: { posts },
    dispatch,
  } = useContext(PostsContext);

  const postFeed = useContext(PostFeedModalContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        if (data.success) {
          return dispatch({ type: "GET_ALL_POSTS", payload: data.message });
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="feed mx-auto flex-1 md:max-w-[550px] lg:max-w-[600px] px-3 sm:px-0 sm:mx-5 mt-5">
      <div className="feed_input_container bg-white p-3  mb-5 rounded-xl">
        <div className="flex gap-2">
          <Image
            src={"/images.png"}
            width={60}
            height={60}
            alt="user-photo"
            className="w-12 h-12 rounded-full object-center"
          />
          <div className="feed_input border flex-1  border-gray-400 rounded-[30px] pl-4 flex p-[11px] text-gray-500">
            <form
              action=""
              className="w-full flex "
              onClick={() => postFeed.dispatch({ type: "OPEN_MODAL" })}
            >
              <input
                type=""
                className="outline-none flex-1 text-sm font-semibold text-gray-700"
                placeholder="start a post "
              />
            </form>
          </div>
        </div>
        <div className="input_option flex justify-between px-4 pt-1 mt-1">
          <div className="flex p-2 gap items-center cursor-pointer hover:bg-gray-200">
            <MdImage className="text-blue-500" size={25} />
            <p className="text-sm text-gray-500 font-bold">Photo</p>
          </div>

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
        {loading ? (
          <Loading />
        ) : (
          posts?.map((post, index) => <Post post={post} key={index} />)
        )}
      </div>
    </div>
  );
};

export default Feed;
