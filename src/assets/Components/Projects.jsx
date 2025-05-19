export default function Projects({ image, children, handleClick }) {
  return (
    <div className="flex border-box hover:translate-y-[-5px] h-fit w-fit p-5 gap-5">
      <img src={image} className="h-fit" onClick={handleClick} />
      {children}
    </div>
  );
}
