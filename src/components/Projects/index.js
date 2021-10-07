import React from "react";

function Projects() {
    const projects = [
        {
            name: "Stumble",
            url: "https://dani-hartley.github.io/Stumble/",
            repo: "https://github.com/dani-hartley/Stumble",
        },
        {
            name: "Budget Tracker",
            url: "https://hidden-bayou-35971.herokuapp.com/",
            repo: "https://github.com/ariellongoria/budget-tracker",
        },
        {
            name: "README Generator",
            url: "",
            repo: "https://github.com/ariellongoria/README-Generator-Pro",
        },
        {
            name: "Workday Scheduler",
            url: "https://ariellongoria.github.io/workday-scheduler/",
            repo: "https://github.com/ariellongoria/workday-scheduler",
        },
        {
            name: "Weather Dashboard",
            url: "https://ariellongoria.github.io/weather-dashboard/",
            repo: "https://github.com/ariellongoria/weather-dashboard",
        },
        {
            name: "Social Network API",
            url: "",
            repo: "https://github.com/ariellongoria/social-network",
        },
    ];

    return (
        <div className="Projects">
            <h1>Projects</h1>

            <ul>
                {projects.map((project, i) => {
                    return (
                        <li key={i}>
                            <h2>{project.name}</h2>
                            <a href={project.repo}>Repository on GitHub</a>
                            <a href={project.url}>Website</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Projects;
