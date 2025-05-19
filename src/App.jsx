import About from "./assets/Components/About";
import Footer from "./assets/Components/Footer";
import Header from "./assets/Components/Header";
import ProjectCard1 from "./assets/Components/ProjectCard1";
import ProjectCard2 from "./assets/Components/ProjectCard2";
import ToolKit from "./assets/Components/Toolkit";

function App() {
  return (
    <div className="grid grid-rows-auto grid-cols-2 md:grid-cols-2 w-full gap-5 md:gap-10 p-2 gap-12 ">
      <Header></Header>
      <About />
      <ToolKit />
      <ProjectCard1></ProjectCard1>
      <ProjectCard2></ProjectCard2>
      <Footer></Footer>
    </div>
  );
}

export default App;
