import PersonalLogo from "/src/assets/img/personal-logo.png";

function Header() {
  return (
    <div className="col-span-2 row-span-1 col-start-1 row-start-1 md:col-start-1 flex justify-between items-center ">
      <img
        src={PersonalLogo}
        alt="Personal Logo"
        className="w-20 h-20 md:w-25 md:h-25"
      />
      <div className="border-box flex flex-row justify-center items-center w-50 h-10 ">
        <svg width="25" height="50" xmlns="http://www.w3.org/2000/svg">
          <rect
            width="5"
            height="5"
            x="20"
            y="8"
            rx="0"
            ry="0"
            fill="#00FF62"
            className="rotate-[50deg] status"
          />
        </svg>
        <h1 className="font-light text-[12px] md:text-[15px]">
          Available remotely
        </h1>
      </div>
    </div>
  );
}

export default Header;
