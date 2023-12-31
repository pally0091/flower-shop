import "./App.css";
import Banner from "./Components/Banner";
import Conclusion from "./Components/Conclusion";
import Deal from "./Components/Deal";
import FlowerCollection from "./Components/FlowerCollection";
import Footer from "./Components/Footer";
import Instagram from "./Components/Instagram";
import Subscription from "./Components/Subscription";

function App() {
  return (
    <>
      <Banner></Banner>
      <FlowerCollection></FlowerCollection>
      <Deal></Deal>
      <Instagram></Instagram>
      <Subscription></Subscription>
      <Conclusion></Conclusion>
      <Footer></Footer>
    </>
  );
}

export default App;
