import React from "react";

const Employment: React.FC = () => {
    return (
        <main>
            <div id="jobs">
                <h2>Professional Experience</h2>

                <div className="job">
                    <h3>IT support specialist</h3>
                    <p>Boston University IT Help Center, Boston, MA</p>
                    <p>Dec 2022 - present</p>
                    <ul>
                        <li>Provide live technical support for event and classrooms</li>
                        <li>Installation and troubleshooting of AV equipments</li>
                        <li>Allocate tickets and conduct project</li>
                    </ul>
                    <br />
                </div>

                <div className="job">
                    <h3>Photographer/Operation specialist</h3>
                    <p>Wan Ka Man Photographer Limited, Hongkong</p>
                    <p>May 2022 - Sep 2022</p>
                    <ul>
                        <li>Photography for exhibits and corporate retail stores</li>
                        <li>Provide remote support for our photographer's in the field</li>
                        <li>File entry and image editing</li>
                    </ul>
                    <br />
                </div>

                <div className="job">
                    <h3>Intern Research Assistant</h3>
                    <p>KWIAHT, San Juan Island, WA</p>
                    <p>Sep 2019 - May 2021</p>
                    <ul>
                        <li>Field data collection and equipment maintenance</li>
                        <li>Data categorization and processing</li>
                    </ul>
                    <br />
                </div>
            </div>
        </main>
    );
};

export default Employment;
