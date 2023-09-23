import React from "react";

const HeaderOption = ({ title, Icon }:{title:string , Icon:any}) => {
  return (
    <div className="header_option flex flex-col items-center mr-5 text-[gray] cursor-pointer hover:text-black">
      {Icon && <Icon className="header_option_icon" size={25} />}
      <h3 className="header_option_title hidden lg:inline-block text-xs font-medium">{title}</h3>
    </div>
  );
};

export default HeaderOption;
