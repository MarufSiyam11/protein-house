import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className=" w-[400px] md:w-full m h-[450px] text-black">
      <div className=" flex justify-center  h-[60px] pt-4  bg-gray-100 ">
        {" "}
        <p className="text-center  font-semibold">
          AMIN.O. ENERGY + Electrolytes Stick Packs: Buy 2 get 1 free with code
          <strong> ONSTICKS </strong>
          at checkout through 10/28/2024
        </p>
      </div>
      <div className="p-5 mt-6 ">
        <img src={banner} alt="" />
        <div className="w-[300px] md:w-[580px] justify-center h-[280px] p-6  relative bg-zinc-100 block mx-auto -mt-10 md:-mt-40">
          <h3 className="text-2xl md:text-4xl font-semibold">
            Buy 2 Get 1 Free:AMIN.O.ENERGY+ Electrolytes Stick Packs!
          </h3>
          <p className="py-2 pb-3">
            <span>Use code </span>
            <strong>
              <span>ONSTICKS</span>
            </strong>
            <span>at checkout through 10/28/2024</span>
          </p>
          <a
            className="bg-black font-semibold  text-white  p-3 w-full block text-center md:w-[175px] h-[60px]"
            href=""
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
