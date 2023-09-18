import Circles from "../../components/Circles";
import Canvas from "../../components/canvas";
import Customizer from "../../components/Customizer";
import Home from "./home";

const Customise = () => {
  return (
  <div className="bg-primary/60 h-full transition-all ease-in">
    <Home />
    <Customizer />
    <Canvas />
    <Circles />
    </div>
  );
};

export default Customise;
