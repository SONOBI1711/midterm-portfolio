const Button = ({ children }) => {
  return (
    <button className="w-[136px] h-[36px] bg-gray-900 text-white rounded-[12px]">
      {children}
    </button>
  );
};
export default Button;
