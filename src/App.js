// Pages
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Stacks from './components/Stacks'
import Projects from './components/Projects'
import Contact from './components/Contact'
import RealProjects from './components/RealProjects'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Stacks />
      <RealProjects />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
