import Fade from "react-reveal/Fade";
import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Fade>
        <Landing />
        <About />
        <FeaturedProject
          title="E-Commerce React Web App"
          languages="HTML CSS JavaScript React"
          description="An e-commerce website for books using a test book API where each book is mapped using reusable HTML elements."
        />
        <Projects />
        <Contact />
        <Footer />
      </Fade>
    </div>
  );
}

export default App;
