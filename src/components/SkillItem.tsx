type SkillItemProps = {
    icon: string;
    name: string;
  };
  
  const SkillItem = ({ icon, name }: SkillItemProps) => {
    return (
      <div className="flex flex-col items-center gap-2">
        {/* Icon */}
        <img src={icon} alt={name} className="w-12 h-12 object-contain" />
  
        {/* Title */}
        <p className="text-sm text-gray-600">{name}</p>
      </div>
    );
  };
  
  export default SkillItem;
  