import { useState } from "react";
import GitIcon from "/src/assets/img/github-logo.svg";
import GmailIcon from "/src/assets/img/gmail-logo.svg";

function About() {
  const [onContact, setOnContact] = useState(false);

  return (
    <div className="col-span-2 row-span-1 flex flex-col gap-4 items-center text-center md:mb-20 mt-10 ml-5 md:m-5 md:ml-15 md:mt-10 ">
      <h1 className="uppercase text-[18px] whitespace-nowrap md:text-[50px] latoFont">
        Front-end web developer
      </h1>
      <p className="text-[12px] md:w-[500px] md:text-[20px]">
        Hello, I'm Luka — a driven, self-taught front-end web developer with two
        years of hands-on experience in coding modern, dynamic websites.
      </p>

      <div
        className="border-box w-40 flex flex-col mt-8"
        style={{
          height: onContact ? "120px" : "50px",
          justifyContent: onContact ? "start" : "center",
        }}
        onMouseEnter={() => setOnContact(!onContact)}
        onMouseLeave={() => setOnContact(!onContact)}
      >
        <h1 className="absolute md:text-[18px] text-sm font-semibold ">
          {!onContact ? "Contact" : "Contacts"}
        </h1>

        {onContact ? (
          <div className="mt-12 flex gap-4 flex-col list-none ">
            <li className="flex flex-row gap-3">
              <img src={GitIcon} className="w-4" />
              <a
                href="https://github.com/Lolaaux"
                className="md:text-[15px] text-sm "
              >
                GitHub
              </a>
            </li>

            <li className="flex flex-row gap-3">
              <img src={GmailIcon} className="w-4" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=imlukaami@gmail.com"
                className="md:text-[15px] text-sm"
              >
                {" "}
                Gmail
              </a>
            </li>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default About;
