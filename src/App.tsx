import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { ThemeProvider } from "./services/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <ScrollProgressBar />
      <AboutMe />
      <MyWork />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
