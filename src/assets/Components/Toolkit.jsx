import htmlIcon from "/src/assets/img/html-logo.png";
import cssIcon from "/src/assets/img/css-logo.png";
import JsIcon from "/src/assets/img/javascript-logo.png";
import reactIcon from "/src/assets/img/react-logo.png";
import reduxIcon from "/src/assets/img/redux-logo.png";
import tailwindcssIcon from "/src/assets/img/tailwindcss-logo.png";
import gsapIcon from "/src/assets/img/gsap-logo.png";
import canvaIcon from "/src/assets/img/canva-logo.png";
import figmaIcon from "/src/assets/img/figma-logo.png";
import supabaseIcon from "/src/assets/img/supabase-logo.png";

const skills = [
  { skill: "HTML5", icon: htmlIcon },
  { skill: "CSS3", icon: cssIcon },
  { skill: "JavaScript", icon: JsIcon },
  { skill: "React", icon: reactIcon },
  { skill: "Redux", icon: reduxIcon },
  { skill: "Tailwindcss", icon: tailwindcssIcon },
  { skill: "GSAP", icon: gsapIcon },
  { skill: "Canva", icon: canvaIcon },
  { skill: "Figma", icon: figmaIcon },
  { skill: "Supabase", icon: supabaseIcon },

  { skill: "HTML5", icon: htmlIcon },
  { skill: "CSS3", icon: cssIcon },
  { skill: "JavaScript", icon: JsIcon },
  { skill: "React", icon: reactIcon },
  { skill: "Redux", icon: reduxIcon },
  { skill: "Tailwindcss", icon: tailwindcssIcon },
  { skill: "GSAP", icon: gsapIcon },
  { skill: "Canva", icon: canvaIcon },
  { skill: "Figma", icon: figmaIcon },
  { skill: "Supabase", icon: supabaseIcon },
];

export default function ToolKit() {
  return (
    <div className="slider-container flex flex-row row-span-2 col-span-2 row-start-3 ">
      <div className="slider ">
        {[...skills].map((item, index) => (
          <div className="flex gap-3 md:gap-5" key={index}>
            <img
              key={index}
              src={item.icon}
              alt={item.skill}
              className="w-8 h-8 md:w-[30px] h-auto"
            />
            <p className="text-[12px] flex justify-center items-center md:text-[15px]">
              {item.skill}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
