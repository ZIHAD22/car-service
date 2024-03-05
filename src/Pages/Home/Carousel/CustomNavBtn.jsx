import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

const CustomNavBtn = () => {
  const swiper = useSwiper();
  return (
    <div>
      <div className="absolute z-10 bottom-[100px] right-[55px]">
        <button onClick={() => swiper.slidePrev()} className="mx-5">
          <FaArrowLeft
            className="bg-[#a9a9a9] rounded-full p-3 hover:bg-main duration-700"
            size="50px"
            color="white"
          />
        </button>
        <button onClick={() => swiper.slideNext()} className="mx-5">
          <FaArrowRight
            className="bg-[#a9a9a9] rounded-full p-3 hover:bg-main duration-700"
            size="50px"
            color="white"
          />
        </button>
      </div>
    </div>
  );
};

export default CustomNavBtn;
