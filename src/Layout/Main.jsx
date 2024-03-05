import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Main = () => {
  return (
    <div className="max-w-[1350px]">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
