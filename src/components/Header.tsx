import Button from "./Button";

const Header = () => {
  return (
    <header className="mt-0 w-full h-[68px]">
      <div className="max-w-[1280px] mx-auto px-[32px] h-full flex justify-between items-center">
        <div>
          <p className="font-inter font-bold text-[30px] leading-[36px] tracking-[-2px] text-gray-900">
            {"<SS /> "}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <ul className="list-none flex justify-around items-center space-x-[24px] mr-[48px]">
            <li className="font-inter font-medium text-[16px] leading-[24px] text-gray-600">
              About
            </li>
            <li className="font-inter font-medium text-[16px] leading-[24px] text-gray-600">
              Work
            </li>
            <li className="font-inter font-medium text-[16px] leading-[24px] text-gray-600">
              Testimonials
            </li>
            <li className="font-inter font-medium text-[16px] leading-[24px] text-gray-600">
              Contact
            </li>
          </ul>
          <div className=" flex items-center justify-center space-x-[16px]">
            <img
              src="src/assets/Light-Dark.svg"
              alt="Light-Dark-icon"
              className=" w-[24px] h-[24px] hover:bg-black"
            />
            <Button variant="primary" size="md" className="w-[136px] h-[36px]">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
