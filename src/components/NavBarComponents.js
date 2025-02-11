import logo from "../images/logo.png";

const NavBarComponents = () => {
  return (
    <nav className="p-4 md:px-10 lg:px-20 flex flex-wrap justify-between items-center">
      {/* Left Section - Logo & Links */}
      <div className="flex items-center w-full md:w-auto justify-between md:justify-start">
        <img src={logo} alt="logo" width={40} height={40} className="cursor-pointer" />
        <button className="md:hidden ml-auto p-2">☰</button> {/* Mobile Menu Toggle */}
        <div className="hidden md:flex flex-wrap ml-6 space-x-6">
          <span className="text-[#212529] font-semibold cursor-pointer underline underline-offset-8 decoration-[#00754a] decoration-2">Home</span>
          <span className="text-[#212529] font-light cursor-pointer">Gift</span>
          <span className="text-[#212529] font-light cursor-pointer">Order</span>
          <span className="text-[#212529] font-light cursor-pointer">Pay</span>
          <span className="text-[#212529] font-light cursor-pointer">Store</span>
        </div>
      </div>
      
      {/* Right Section - Search & Profile */}
      <div className="flex items-center space-x-4 w-full md:w-auto mt-4 md:mt-0">
        <div className="relative w-full md:w-56">
          <svg width="20" height="20" className="absolute top-2 left-3 text-gray-500">
            <path d="M18.9748 18.047L15.0698 14.1437C14.8164 13.8904 14.4031 13.8904 14.1506 14.147..." fill="black" fillOpacity="0.58"/>
          </svg>
          <input type="text" className="text-xs border-2 p-2 rounded-3xl pl-8 w-full focus:border-black" placeholder="Looking for something specific" />
        </div>
        <div>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M18 1.5C27.1127 1.5 34.5 8.8873 34.5 18C34.5 27.1127 27.1127 34.5 18 34.5C8.8873 34.5 1.5 27.1127 1.5 18C1.5 8.8873 8.8873 1.5 18 1.5ZM18 3.15C9.79857 3.15 3.15 9.79857 3.15 18C3.15 26.2014 9.79857 32.85 18 32.85C26.2014 32.85 32.85 26.2014 32.85 18C32.85 9.79857 26.2014 3.15 18 3.15ZM18 19.425C22.5978 19.425 26.325 23.1522 26.325 27.75C26.325 28.2056 25.9556 28.575 25.5 28.575C25.0444 28.575 24.675 28.2056 24.675 27.75C24.675 24.0635 21.6865 21.075 18 21.075C14.3135 21.075 11.325 24.0635 11.325 27.75C11.325 28.2056 10.9556 28.575 10.5 28.575C10.0444 28.575 9.675 28.2056 9.675 27.75C9.675 23.1522 13.4022 19.425 18 19.425ZM18 7.875C20.6924 7.875 22.875 10.0576 22.875 12.75C22.875 15.4424 20.6924 17.625 18 17.625C15.3076 17.625 13.125 15.4424 13.125 12.75C13.125 10.0576 15.3076 7.875 18 7.875ZM18 9.525C16.2189 9.525 14.775 10.9689 14.775 12.75C14.775 14.5311 16.2189 15.975 18 15.975C19.7811 15.975 21.225 14.5311 21.225 12.75C21.225 10.9689 19.7811 9.525 18 9.525Z" fill="black" fillOpacity="0.58"/> 
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponents;
