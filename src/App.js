import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import NavBar from "./Components/navbar/NavBar";
import PortFolio from "./Components/PortFolio/PortFolio";
import Service from "./Components/service/Service";
const App = () => {

  
  return (
    <div>

   <NavBar/>
   <Header/>
   <About/>
   <Service/>
   <PortFolio/>
   <Footer/>


    </div>
  );
};
export default App;
