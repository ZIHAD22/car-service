const CarouselItem = ({ img, heading, subHeading }) => {
  return (
    <div
      className="h-[700px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div
        className="h-full opacity-90 text-[white]"
        style={{
          background: "linear-gradient(to left, #ffffff00 0%, black 65%)",
        }}
      >
        <div className="w-1/2 p-20">
          <h1 className="text-6xl mb-14">{heading}</h1>
          <p className="mb-8">{subHeading}</p>
          <div>
            <button className="btn text-[white] bg-main mx-2">
              Discover More
            </button>
            <button className="btn bg-opacity-0 mx-2 text-[white]">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
