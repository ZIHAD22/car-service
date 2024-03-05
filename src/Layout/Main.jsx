import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Shared/NavBar/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
