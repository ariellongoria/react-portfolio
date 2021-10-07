import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css";

function App() {
    const [currentSection, setCurrentSection] = useState("aboutme");

    return (
        <div>
            <header>
                <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />
                {/*if currentSection changes, the rendered component changes*/}
            </header>
            <main>
                {currentSection === "aboutme" ? (
                    <About />
                ) : currentSection === "projects" ? (
                    <Projects />
                ) : currentSection === "resume" ? (
                    <Resume />
                ) : (
                    <Contact />
                )}
            </main>
            <footer>
                <span>Made by Ariel Longoria</span>
                <a href="github.com/ariellongoria">GitHub</a>
                <a href="linkedin.com/in/ariellongoria">LinkedIn</a>
                <a href="/">Lmao</a>
            </footer>
        </div>
    );
}

export default App;
