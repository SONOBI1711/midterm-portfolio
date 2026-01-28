import Avatar from "./Avatar";

const Hero = () => {
  return (
    <section className="w-full h-[552px] mt-[68px] py-[96px]">
      <div className="max-w-[1240px] mx-auto h-[360px] flex justify-center items-center">
        <div className="text-section"></div>
        <div className="image-section">
          <Avatar
            src="src/assets/Hero-Avatar.png"
            alt="Hero-Avatar"
            className="w-[320px] h-[360px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
