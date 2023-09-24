"use client"
import Image from "next/image";
import {
  MdCalendarViewDay,
  MdEvent,
  MdImage,
} from "react-icons/md";
import Post from "./Post";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";



const Feed = () => {
  const [formData, setFormData] = useState({
    text: "",
   
  });
const [posts , setPost] = useState(Array<any>)
const [loading , setLoading] = useState(true)
  useEffect(()=>{
   const getPosts = async ()=>{
    try {
      const {data} = await axios.get("/api/posts")
      console.log(data)
      if(data.success){
        console.log(data)
        return setPost([...data.message])
      }
    } catch (error) {
      
    }finally{setLoading(false)}
   }
   getPosts()
  },[])

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const { data } = await axios.post("/api/posts", formData);
      if (data.success) {
        setFormData({...formData , text:''})
       setPost([data.message ,...posts])
      }
    } catch (error: any) {
      toast.error("An error occurs");
    } 
  };
  
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="feed mx-auto flex-1 md:max-w-[550px] lg:max-w-[600px] px-3 sm:px-0 sm:mx-5 mt-5">
     <Toaster/>
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
            <form action="" className="w-full flex" onSubmit={submit}>
              <input
                type="text"
                className="outline-none flex-1 text-sm font-semibold text-gray-700"
                placeholder="start a post "
               name="text"
               value={formData.text}
                onChange={inputChangeHandler}
              />
              <button type="submit" className="hidden">
                send
              </button>
            </form>
          </div>
        </div>
        <div className="input_option flex justify-between px-4 pt-1 mt-1">
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
        {loading ?(
        <div className="animate-ping text-xl text-black w-full flex mt-10 justify-center">
            loading
        </div>
          ) :
          posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
