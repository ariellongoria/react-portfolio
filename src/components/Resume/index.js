import React from "react";
import resume from "../../downloads/LongoriaAriel-Resume-New.pdf";

function Resume() {
    return (
        <div className="Resume">
            <h1>Resume</h1>

            <a href={resume} download>
                Download my resume
            </a>
        </div>
    );
}

export default Resume;
