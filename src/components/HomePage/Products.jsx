import pellet from "../../assets/images/pellet.jpg";
import sbriquette from "../../assets/images/sbriquette.jpg";
import cubes from "../../assets/images/cubes.jpg";
import cstalk from "../../assets/images/cstalk.jpg";
import TeamMembers from "../../utils/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Products = () => {

    const ProductItems = [
        {
            image: pellet,
            name: "Bidigreen Pellets",
            title: "Made from Coconut Shells /Palm Kernels"
        },
        {
            image: sbriquette,
            name: "Bidigreen Sawdust Briquette",
            title: "Made from Sawdust"
        },
        {
            image:  cubes,
            name: "Bidigreen Charcoal Cubes",
            title: "Made from Coconut Shells /Palm Kernels"
        },
        {
            image: cstalk,
            name: "Bidigreen Charcoal Stalks",
            title: "Made from Coconut Shells /Palm Kernels"
        },
    ]
  return (
    <div className="px-4 py-8 lg:px-16">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-8">
        <h2 className=" font-bold text-center text-green-800 underline md:text-lg lg:text-5xl">
          Our Products
        </h2>
      
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, // Time in milliseconds between automatic transitions
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        spaceBetween={20} // Space between slides
        slidesPerView={1} // Default: Display one slide at a time
        loop={true} // Enable infinite looping
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 }, // For small screens
          1024: { slidesPerView: 3, spaceBetween: 30 }, // For large screens
        }}
        className="w-full"
      >
        {ProductItems.map((team, index) => (
          <SwiperSlide key={index}>
            <div className="relative max-w-xs mx-auto group">
              <img
                src={team.image}
                alt="team image"
                className="w-full rounded-md shadow-md"
              />
              <div
                className="absolute bottom-0 left-0 w-full bg-white bg-opacity-80 p-2 text-center 
                           transition-colors duration-300 ease-in-out group-hover:bg-green-500 rounded-b-md"
              >
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-white md:text-xl">
                  {team.name}
                </h2>
                <p className="text-sm text-green-500 font-medium group-hover:text-white md:text-base">
                  {team.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
