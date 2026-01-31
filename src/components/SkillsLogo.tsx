const SkillLogo = () => {
  const skills = [
    { name: "JavaScript", icon: "/icon-javscript.svg" },
    { name: "TypeScript", icon: "/icon-typescript.svg" },
    { name: "React", icon: "/icon-react.svg" },
    { name: "Next.js", icon: "/icon-nextjs.svg" },
    { name: "Node.js", icon: "/icon-nodejs.svg" },
    { name: "Express.js", icon: "/icon-express.svg" },
    { name: "Nest.js", icon: "/icon-nest.svg" },
    { name: "Socket.io", icon: "/icon-socket.svg" },

    { name: "PostgreSQL", icon: "/icon-postgresql.svg" },
    { name: "MongoDB", icon: "/icon-mongodb.svg" },
    { name: "Sass/Scss", icon: "/icon-sass.svg" },
    { name: "Tailwindcss", icon: "/icon-tailwindcss.svg" },
    { name: "Figma", icon: "/icon-figma.svg" },
    { name: "Cypress", icon: "/icon-cypress.svg" },
    { name: "Storybook", icon: "/icon-storybook.svg" },
    { name: "Git", icon: "/icon-git.svg" },
  ];

  return (
    <>
      {/* Grid 2 hàng */}
      <div className="grid grid-cols-8 gap-x-[86px] gap-y-[48px] justify-items-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-[64px] h-[64px]"
            />

            <p className="text-[18px] leading-[28px] font-normal text-gray-600">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillLogo;
