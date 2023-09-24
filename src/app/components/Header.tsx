import Image from "next/image";
import {
  MdAllInbox,
  MdCardTravel,
  MdHome,
  MdMessage,
  MdMoreHoriz,
  MdNotifications,
  MdSearch,
  MdSupervisorAccount,
  MdViewCompact,
} from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import HeaderOption from "./HeaderOption";
const Header = () => {
  return (
    <header className=" bg-white  border-b border-gray-50  w-full  py-2  sticky top-0 z-[999]">
   
   <div className="flex max-w-7xl px-4 mx-auto md:px-10 lg:px-6 xl:px-20">

      <nav className="header_left  flex sm:mr-10">
        {/* img */}
        <Image
          src={"/linkedin.png"}
          alt="linkedin"
          width={40}
          height={40}
          className="object-contain h-8  md:h-10"
        />

        <div className="header_search hidden lg:flex  bg-[#eef3f8] ml-3  py-[10px] px-[6px] items-center rounded-md   h-10  text-['gray']">
          <MdSearch size={25} />
          <input
            type="text"
            className="border-0 outline-none bg-transparent   p-2 "
          />
        </div>
      </nav>

      <nav className="header_right flex flex-1 justify-between  items-center">
        <span className="lg:hidden ml-5"><HeaderOption title="Search" Icon={MdSearch} /></span>
        <HeaderOption title={"Home"} Icon={MdHome} />
        <HeaderOption title={"My Network"} Icon={MdSupervisorAccount} />
        <HeaderOption title={"Jobs"} Icon={MdCardTravel} />
        <HeaderOption title={"Messages"} Icon={MdMessage} />
        <HeaderOption title={"Notifications"} Icon={MdNotifications} />
        <div className="">
          <Image
          alt="logo"
            width={25}
            height={20}
            src={"/images.png"}
            className="flex justify-center"
          />
          <h3 className="hidden lg:flex  item items-center text-xs mr-5 text-[gray] cursor-pointer hover:text-black">
            <span>Me</span>{" "}
            <span>
              <FaChevronDown />
            </span>
          </h3>
        </div>
        <span className="hidden xs:inline-block">
        <HeaderOption title={"for Business"} Icon={MdViewCompact} />
          </span>
          <span className="hidden xs:inline-block">

        <HeaderOption title={"post a job"} Icon={MdAllInbox} />
          </span>
          <span className="xs:hidden" >
          <MdMoreHoriz size={25}/>

          </span>
      </nav>
   </div>
    </header>
  );
};

export default Header;
