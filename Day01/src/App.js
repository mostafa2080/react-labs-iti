import './App.css';
import HeroSection from './Components/Hero/hero';
import AboutSection from './Components/AboutMe/aboutme';
import SkillsSection from './Components/Skills/skills';
import PortfolioSection from './Components/Portfolio/portfolio';
import FooterSection from './Components/Footer/footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <FooterSection />
    </div>
  );
}

export default App;
