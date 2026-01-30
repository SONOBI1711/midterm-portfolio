import WorkPhoto from "./WorkPhoto";
import WorkTag from "./WorkTag";
import WorkIcon from "./WorkIcon";

type WorkCardData = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: string;
  reverse?: boolean; // reverse dùng để đảo layout (so le)
};

const WorkCard = ({
  title,
  description,
  image,
  tags,
  icon,
  reverse = false,
}: WorkCardData) => {
  return (
    <div
      className={`
        flex items-center gap-10
        p-8 bg-white rounded-2xl shadow-sm
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >
      {/*  Image */}
      <WorkPhoto src={image} alt={title} />

      {/* Text */}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>

        <WorkTag tags={tags} />
        <WorkIcon />
      </div>
    </div>
  );
};

export default WorkCard;
