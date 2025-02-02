import hero from "../../../assets/Hero (3).png";

const Hero = () => {
  return (
    <div className="items-center grid grid-cols-2 gap-6 bg-gray-100 rounded-xl p-[150px] container mx-auto">
      <div>
        <h2 className="md:text-6xl text-2xl leading-normal font-bold">
          Books to freshen up your bookshelf
        </h2>
        <button className="bg-green-500 py-4 px-6 mt-12 rounded-xl text-white font-bold">
          View The List
        </button>
      </div>
      <div className="flex justify-center">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
