import SkillItem from "./SkillItem";
import { skills } from "../data/skills"

const Skills = () => {
  return (
    <section className="w-full py-20 h-[560px] mt-[700px]">
      <div className="max-w-[1240px] mx-auto text-center">
        {/* Label */}
        <p className="text-sm text-gray-500 mb-2">Skills</p>

        {/* Heading */}
        <h2 className="text-lg text-gray-700 mb-12">
          The skills, tools and technologies I am really good at:
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-8 gap-y-[48px] gap-x-6">
          {skills.map((skill, index) => (
            <SkillItem key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
