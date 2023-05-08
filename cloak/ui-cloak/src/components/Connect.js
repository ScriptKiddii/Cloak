import React from "react";
import { useContext } from "react";
import { CloakContext } from "./Cloak";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { HiQuestionMarkCircle } from "react-icons/hi";

const Connect = () => {
  const navigate = useNavigate();

  const data = useContext(CloakContext);

  return (
    <div className="max-w-[1090px] mx-auto pt-4 sm:pt-8 pb-12 ">
      <div className="sm:px-7 px-4 flex justify-between">
        {/* leftside logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="flex space-x-1 items-center">
            <img src={logo} alt="" className="w-[55px] h-[52px]" />
            <h1 className="montserrat-subtitle font-bold sm:text-[1.3rem]  text-[1.1rem] text-[#6c8492] dark:text-gray-200">
              Cloak
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div
              onClick={navigate("/")}
              className="flex items-end space-x-1 sm:ml-14 ml-6 hover:text-gray-800 text-[#58707e] dark:text-gray-200 montserrat-subtitle underline-offset-8 font-bold hover:underline decoration-[#FF5757]  sm:text-[1rem] text-[0.9rem]"
            >
              <IoMdHome
                size={28}
                className="self-start text-[#6b7e88] dark:text-gray-200"
              />
              <p>Home</p>
            </div>
            <div
              onClick={navigate("/")}
              className="flex items-end space-x-1 sm:ml-14 ml-6 hover:text-gray-800 text-[#58707e] dark:text-gray-200 montserrat-subtitle underline-offset-8 font-bold hover:underline decoration-[#FF5757]  sm:text-[1rem] text-[0.9rem]"
            >
              <HiQuestionMarkCircle
                size={28}
                className="self-start text-[#6b7e88] dark:text-gray-200"
              />
              <p>QnA</p>
            </div>
          </div>
        </div>

        {/* rigt side */}
        <div className="flex space-x-3 items-center">
          <div className="sm:flex hidden space-x-3 items-center">
            <p className="text-gray-400 hover:text-gray-500 dark:text-gray-200">
              <a href="/https://discord.gg/qupF3BrP">
                <FaDiscord size={20} />
              </a>
            </p>
            <p className="text-gray-400 hover:text-gray-500 dark:text-gray-200">
              <a href="https://github.com/ScriptKiddii/Cloak">
                <FaGithub size={20} />
              </a>
            </p>
            <p className="text-gray-400 hover:text-gray-500 dark:text-gray-200">
              <a href="https://twitter.com/TronCloak">
                <FaTwitter size={20} />
              </a>
            </p>
          </div>

          <p className="sm:text-[1rem] montserrat-small  text-gray-500  font-semibold text-[0.8rem]">
            {sessionStorage.getItem("address") === null || false
              ? ""
              : `${sessionStorage.getItem("address").slice(0, 17)}...`}
          </p>
          <button
            onClick={data.connectwallet}
            className="montserrat-subtitle border-1 p-1 sm:text-[1rem] text-[0.8rem]
                     text-[#FF5757] bg-[#FDF0EF] dark:bg-[#FF5757] dark:text-gray-900 dark:hover:text-black border
                     shadow-sm hover:shadow-md px-2 sm:px-4 rounded-md
                    hover:bg-[#FF5757] hover:text-[white] font-bold border-pink-200 dark:border-gray-800"
          >
            {(sessionStorage.getItem("address") === null || false) &&
            sessionStorage.getItem("balance") === null
              ? "connect wallet"
              : "Connected"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
