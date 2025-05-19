import Project2 from "/src/assets/img/project2.png";
import Projects from "/src/assets/Components/Projects.jsx";
import reactIcon from "/src/assets/img/react-logo.png";
import reduxIcon from "/src/assets/img/redux-logo.png";
import tailwindcssIcon from "/src/assets/img/tailwindcss-logo.png";
import gsapIcon from "/src/assets/img/gsap-logo.png";
import Description from "/src/assets/Components/Description.jsx";
import ProjectTool from "/src/assets/Components/ProjectTool.jsx";
import { useState } from "react";

const Project2Desc =
  "MyScreen is a dynamic and responsive website allowing users to track and rate their favorite movies and TV shows. Built with user authentication and authorization through Supabase, it enables secure logins where users can search for movies/TV shows from a large API. Users can leave personal notes, rate shows, and mark their favorite content. Upon logging in, they can view their personal movie/show diary, showcasing their rated, watched, and favorited content. The website is fully responsive and compatible with all screen sizes and modern browsers, ensuring an optimal user experience across devices.";

function ProjectCard2() {
  const [seeMore, setSeeMore] = useState(true);
  return (
    <div className="col-span-2 md:col-span-1 hover:cursor-pointer">
      <Projects image={Project2}>
        <div className="flex flex-col">
          <p className="text-sm text-[#00FF62] txt-blink">
            Currently under development
          </p>
          <Description
            text={
              seeMore
                ? `${Project2Desc.slice(0, Project2Desc.indexOf("they"))}`
                : `${Project2Desc}`
            }
            see={seeMore ? "See more" : "See less"}
            tool={reduxIcon}
            title="MyScreen"
            handleSeeMore={() => setSeeMore(!seeMore)}
          >
            <div className="flex flex-row gap-4">
              <ProjectTool tool={reduxIcon}></ProjectTool>
              <ProjectTool tool={reactIcon}></ProjectTool>
              <ProjectTool tool={tailwindcssIcon}></ProjectTool>
              <ProjectTool tool={gsapIcon}></ProjectTool>
            </div>
          </Description>
        </div>
      </Projects>
    </div>
  );
}

export default ProjectCard2;
