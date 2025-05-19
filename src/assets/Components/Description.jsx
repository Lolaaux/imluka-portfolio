export default function Description({
  text,
  title,
  children,
  handleSeeMore,
  see,
}) {
  return (
    <div className="flex items-start flex flex-col gap-2 ">
      <h1 className="text-[20px] font-[600]">{title}</h1>
      <p
        className="text-[14px] sm:text-[15px] md:text-[15px] pb-5"
        onClick={handleSeeMore}
      >
        {text}
        <span className="font-[700] underline p-2">{see}</span>
      </p>
      {children}
    </div>
  );
}
