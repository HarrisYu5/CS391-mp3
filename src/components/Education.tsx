import React from "react";
import buImage from "../assets/bu.jpg";
import { useEffect } from "react";

const Education: React.FC = () => {

    useEffect(() => {
        document.title = "Education | Resume";
    }, []);
    return (
        <main>
            <img id="bu" src={buImage} alt="Pic of BU campus at night" />
            <div id="background">
                <h2>Academic background</h2>
                <p>
                    I am a 4th year Computer Science student at Boston University. I have extensive experience with a variety of tools and frameworks. My programming language expertise includes Java, C#, Python, R, Kotlin, and SQL. I am also familiar with .NET, Flask, Android Studio, MongoDB, and PyTorch.
                </p>
                <p>
                    I have taken courses related to data analytics and data science, which I plan to specialize in, and I have experience working in collaborative environments.
                </p>
            </div>
            <div id="courses">
                <ul>
                    <li><strong>CS392:</strong> C# Application Development</li>
                    <li><strong>CS411:</strong> Software Engineering</li>
                    <li><strong>CS412:</strong> Full Stack Application Development</li>
                    <li><strong>CS460:</strong> Database Systems</li>
                    <li><strong>PO399:</strong> Data Science for Politics</li>
                </ul>
            </div>
        </main>
    );
};

export default Education;