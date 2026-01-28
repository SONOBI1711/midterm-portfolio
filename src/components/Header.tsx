import Button from "./Button";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[68px]">
      <div className="max-w-[1240px] mx-auto h-full flex justify-between items-center">
        <div>
          <p></p>
          {"<SS /> "}
        </div>
        <div className="flex justify-center items-center">
          <ul className="list-none flex justify-around items-center space-x-[24px] mr-[48px]">
            <li>About</li>
            <li>Work</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
          <div className=" flex items-center justify-center space-x-[16px]">
            <img src="src/assets/Light-Dark.svg" alt="Light-Dark-icon" />
            <Button>Download CV</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
