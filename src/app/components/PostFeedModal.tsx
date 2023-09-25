"use client";
import React, { useContext, useEffect, useState } from "react";
import { AuthType } from "../types";
import Image from "next/image";
import {
  MdClose,
  MdMoreHoriz,
  MdOutlineAccessTime,
  MdOutlineCalendarMonth,
  MdOutlineEmojiEmotions,
  MdOutlineImage,
  MdOutlineLocationSearching,
} from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { PostsContext } from "../contex/PostContext";
import { PostFeedModalContext } from "../contex/PostFeedModalContext";

const PostFeedModal = ({ auth }: { auth: AuthType }) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [formData, setFormData] = useState({
    text: "",
  });

  const { dispatch } = useContext(PostsContext);
  const postFeed = useContext(PostFeedModalContext);

  const submit = async () => {
    try {
      const { data } = await axios.post("/api/posts", formData);
      if (data.success) {
        setFormData({ ...formData, text: "" });
        return dispatch({ type: "SAVE_POST", payload: data.message });
      }
    } catch (error: any) {
      toast.error("An error occurs");
    } finally {
      postFeed.dispatch({ type: "CLOSE_MODAL" });
    }
  };

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    if (formData.text.length > 0) {
      return setDisabledButton(false);
    }
    return setDisabledButton(true);
  }, [formData]);

  return (
    <div className="post-feed-modal absolute top-0 h-screen w-full px-3 xs:px-0  z-[999]">
      <div className=" modal-container bg-white mt-10 mx-auto md:w-[750px] rounded-md ">
        <Toaster />
        <div className="flex p-4 justify-between">
          <div className="flex items-center">
            <div
              className="flex gap-1 mb-2 items-center hover:bg-slate-200 px-2 pr-3 cursor-pointer
            "
            >
              <Image
                src={"/images.png"}
                alt="user"
                width={100}
                height={100}
                className="mb-2 w-12 h-12 xs:h-14 xs:w-14  rounded-full object-center"
              />
              <div>
                <h2 className="font-semibold ">{auth?.name}</h2>
                <p className="text-sm">Post to Anyone</p>
              </div>
            </div>
          </div>

          <MdClose
            size={30}
            className="cursor-pointer p-1 hover:bg-gray-200 hover:rounded-full"
            onClick={() => postFeed.dispatch({ type: "CLOSE_MODAL" })}
          />
        </div>

        <div className="p-4">
          <textarea
            name="text"
            placeholder="What do you want to talk about?"
            className="w-full text-[18px] px-4 py-3 min-h-[150px] outline-none focus:outline-none"
            value={formData.text}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="emoji mb-5 mt-4 xs:mt-10 p-4">
          <MdOutlineEmojiEmotions size={24} className="text-gray-500" />
        </div>
        <div className="border-b border-gray-300">
          <div className="flex gap-3 p-4">
            <span
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg cursor-pointer "
              title="Add media"
            >
              <MdOutlineImage size={26} className="text-gray-600" />
            </span>
            <span
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg cursor-pointer"
              title="Create an event"
            >
              <MdOutlineCalendarMonth size={26} className="text-gray-600" />
            </span>
            <span
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg cursor-pointer"
              title="Celebrate an occasion"
            >
              <MdOutlineLocationSearching size={26} className="text-gray-600" />
            </span>
            <span
              className="bg-gray-200 p-3 rounded-full hover:shadow-lg cursor-pointer"
              title="More"
            >
              <MdMoreHoriz size={26} className="text-gray-600" />
            </span>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 p-4">
          <MdOutlineAccessTime size={23} className="text-gray-600" />
          <button
            className={
              disabledButton
                ? "bg-gray-200 px-4 py-1 text-gray-400 rounded-full "
                : "bg-blue-600 px-4 py-1 text-white rounded-full"
            }
            onClick={() => submit()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostFeedModal;
