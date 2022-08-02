import FeaturedProject from "./components/FeaturedProject";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <Landing /> */}
      {/* <FeaturedProject
        title="Spotify"
        languages="html css js react"
        description="this is a text"
      /> */}
      <Projects />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
