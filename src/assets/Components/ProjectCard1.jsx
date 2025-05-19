import Project1 from "/src/assets/img/project1.png";
import Projects from "/src/assets/Components/Projects.jsx";
import reactIcon from "/src/assets/img/react-logo.png";
import reduxIcon from "/src/assets/img/redux-logo.png";
import tailwindcssIcon from "/src/assets/img/tailwindcss-logo.png";
import Description from "/src/assets/Components/Description.jsx";
import ProjectTool from "/src/assets/Components/ProjectTool.jsx";
import { useState } from "react";

const Project1Desc =
  "Dynamic tree charity website, allowing users to make mock donations to plant trees in countries across Europe. User authentication is handled securely through Google OAuth, ensuring a safe and reliable login process. Supabase is used to manage donation data, enabling users to select donation options when donating and later view donation history. While the website is a mock project (no real donations are processed), it effectively demonstrates user interaction, authentication, and real-time database integration. The site is fully responsive and compatible with all modern browsers.";
function ProjectCard1() {
  const [seeMore, setSeeMore] = useState(true);
  return (
    <div className="col-span-2 md:col-span-1 hover:cursor-pointer">
      <Projects
        image={Project1}
        handleClick={() =>
          window.open("https://forevertree.netlify.app/", "_blank")
        }
      >
        <div className="flex flex-col">
          <p className="text-sm text-[#B907FF] txt-blink ">
            Mock charity website
          </p>
          <Description
            text={
              seeMore
                ? `${Project1Desc.slice(0, Project1Desc.indexOf("While"))}`
                : `${Project1Desc}`
            }
            see={seeMore ? "See more" : "See less"}
            tool={reduxIcon}
            title="ForeverTree | Tree Charity"
            handleSeeMore={() => setSeeMore(!seeMore)}
          >
            <div className="flex flex-row gap-4">
              <ProjectTool tool={reduxIcon}></ProjectTool>
              <ProjectTool tool={reactIcon}></ProjectTool>
              <ProjectTool tool={tailwindcssIcon}></ProjectTool>
            </div>
          </Description>
        </div>
      </Projects>
    </div>
  );
}

export default ProjectCard1;
