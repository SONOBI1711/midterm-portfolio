const Text = ({
  heading = "",
  paragraphs = [],
  list = [],
  variant = "default",
}) => {
  const headingStyle =
    variant === "hero"
      ? "text-[60px] leading-[72px] font-bold"
      : "text-[30px] leading-[36px] font-semibold";

  const paragraphStyle = "text-[16px] leading-[24px] font-normal text-gray-600";

  return (
    <div className="flex flex-col gap-4">
      {/* Heading */}
      <h1 className={headingStyle}>{heading}</h1>

      {/* Paragraphs */}
      <div className="flex flex-col gap-4">
        {paragraphs.map((text, index) => (
          <p key={index} className={paragraphStyle}>
            {text}
          </p>
        ))}
      </div>

      {/* List */}
      {list.length > 0 && (
        <ul className="list-disc pl-5 text-[16px] leading-[24px] text-gray-600">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Text;
