import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
