function ProjectTool({ tool }) {
  return (
    <div className="rounded-full bg-white/10 backdrop-blur-lg w-10 h-10 flex justify-center mb-5">
      <img src={tool} className="object-contain w-5" />
    </div>
  );
}

export default ProjectTool;
