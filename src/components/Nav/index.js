import React from "react";

function Nav({ currentSection, setCurrentSection }) {
    function isHighlight(id) {
        if (currentSection === id) {
            return true;
        }
        return false;
    }

    return (
        <nav>
            <ul>
                <li
                    id="aboutme"
                    className={isHighlight("aboutme") === true ? `navHighlight` : ""}
                    onClick={() => setCurrentSection("aboutme")}
                >
                    About Me
                </li>
                <li
                    id="projects"
                    className={isHighlight("projects") === true ? `navHighlight` : ""}
                    onClick={() => setCurrentSection("projects")}
                >
                    Projects
                </li>
                <li
                    id="resume"
                    className={isHighlight("resume") === true ? `navHighlight` : ""}
                    onClick={() => setCurrentSection("resume")}
                >
                    Resume
                </li>
                <li
                    id="contact"
                    className={isHighlight("contact") === true ? `navHighlight` : ""}
                    onClick={() => setCurrentSection("contact")}
                >
                    Contact
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
