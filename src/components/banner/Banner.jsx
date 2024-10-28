import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="  w-full h-[450px] text-black">
      <div className="text-center flex justify-center h-[60px] pt-4 bg-neutral-300">
        {" "}
        <p className="text-center  font-semibold">
          AMIN.O. ENERGY + Electrolytes Stick Packs: Buy 2 get 1 free with code
          <strong> ONSTICKS </strong>
          at checkout through 10/28/2024
        </p>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
