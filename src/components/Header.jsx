import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

function Header({ toggleDarkMode, isDarkMode }) {
  const navDialog = document.getElementById("nav-dialog");
  const handleClick = () => {
    navDialog.classList.toggle("hidden");
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <nav className="p-3 flex justify-between items-center">
        <a href="#" className="text-4xl cursor-pointer">
          YOUR_PROJECT_NAME
        </a>
        <div className="hidden md:flex gap-12">
          <a href="#" className="font-medium hover:text-gray-500">
            About
          </a>
          <a href="#" className="font-medium hover:text-gray-500">
            Contact
          </a>
          <a href="#" className="font-medium hover:text-gray-500">
            Sign In
          </a>
        </div>
        <button className="hidden md:flex gap-3 p-2" onClick={toggleDarkMode}>
          {isDarkMode ? <IoSunnyOutline size={20} /> : <FaSun size={20} />}
        </button>
        <button className="p-2 md:hidden" onClick={handleClick}>
          <MdMenu className="cursor-pointer" />
        </button>
        <div
          id="nav-dialog"
          className="md:hidden fixed p-3 inset-0 bg-white dark:bg-gray-900 "
        >
          <div className="flex justify-between">
            <a href="#" className="text-4xl cursor-pointer">
              Regex Gen
            </a>
            <button className="p-2 md:hidden" onClick={handleClick}>
              <IoClose className="cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col mt-6">
            <a
              href="#"
              className="m-2 p-2 font-medium block hover:bg-gray-800 rounded-lg"
            >
              About
            </a>
            <a
              href="#"
              className="m-2 p-2 font-medium block hover:bg-gray-800 rounded-lg"
            >
              Contact
            </a>
            <a
              href="#"
              className="m-2 p-2 font-medium block hover:bg-gray-800 rounded-lg"
            >
              Sign In
            </a>
          </div>
          <div className="mt-6 h-[1px] bg-red-900"></div>
          <button className="m-4" onClick={toggleDarkMode}>
            {isDarkMode ? <IoSunnyOutline size={20} /> : <FaSun size={20} />}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
