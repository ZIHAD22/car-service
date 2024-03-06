import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <section className="hero min-h-screen px-10 pb-[50px]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={person}
            className="w-[460px] h-[473px] rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-[327px] h-[332px] rounded-lg shadow-2xl absolute bottom-[-95px] right-[65px] border-8 border-[white]"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className=" text-2xl font-bold text-main mt-[50px]">About Us</h1>
          <h1 className="text-7xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.
          </p>
          <button className="btn bg-main text-[white]">Get More Info</button>
        </div>
      </div>
    </section>
  );
};

export default About;
