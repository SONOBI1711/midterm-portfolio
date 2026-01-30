import WorkCard from "./WorkCard";
import {WorkObject} from "./WorkObject";

const Work = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center">
          Work
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Some of the noteworthy projects I have built:
        </p>

        {/* Cards */}
        <div className="mt-12 flex flex-col gap-12">
          {WorkObject.map((object, index) => (
            <WorkCard
              key={object.id}
              title={object.title}
              description={object.description}
              image={object.image}
              tags={object.tags}
              reverse={index % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
