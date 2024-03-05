import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner1 from "../../../assets/images/homeCarousel/1.jpg";
import banner3 from "../../../assets/images/homeCarousel/2.jpg";
import banner2 from "../../../assets/images/homeCarousel/3.jpg";
import banner4 from "../../../assets/images/homeCarousel/4.jpg";
import CustomNavBtn from "./CustomNavBtn";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  return (
    <div className="w-[90%] mx-auto my-8 rounded-2xl overflow-hidden relative z-0">
      <Swiper
        // pagination={{
        //   type: "fraction",
        // }}
        modules={[Pagination, Navigation]}
        // navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselItem
            img={banner1}
            heading="Affordable Price For Car Servicing"
            subHeading="There are many variations of passages of available, but the majority
          have suffered alteration in some form"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            img={banner2}
            heading="Affordable Price For Car Servicing"
            subHeading="There are many variations of passages of available, but the majority
          have suffered alteration in some form"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            img={banner3}
            heading="Affordable Price For Car Servicing"
            subHeading="There are many variations of passages of available, but the majority
          have suffered alteration in some form"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselItem
            img={banner4}
            heading="Affordable Price For Car Servicing"
            subHeading="There are many variations of passages of available, but the majority
          have suffered alteration in some form"
          />
        </SwiperSlide>
        <CustomNavBtn />
      </Swiper>
    </div>
  );
};

export default Carousel;
