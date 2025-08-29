import Navbar from "./scenes/navbar";
import {  useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import About from "./scenes/about";
import Experiences from "./scenes/experiences";
import Contact from "./scenes/contact";
import Skills from "./scenes/skills";
import Projects from "./scenes/projects";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.About);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      /* Check if you are at the top of the page */
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.About);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background-100 app">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <About setSelectedPage={setSelectedPage} />
      <Experiences setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
    </div>
  );
}

  
export default App;
