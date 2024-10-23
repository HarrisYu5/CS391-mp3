import React from "react";
import fishPic from "../assets/me.jpg";
import { useEffect } from "react";



const Main: React.FC = () => {

    useEffect(() => {
        document.title = "Main Page | Resume";
    }, []);
    return (
        <main>
            <img id="mainpic" src={fishPic} alt="Me holding a fish" style={{ width: "400px" }} />
            <p>Hello! My name is Harris Yu, I am a 4th year computer science student at Boston University. I am an avid outdoor enthusiast from Hong Kong, and I'm interested in Web app development.</p>
            <p>This webpage is intended as a demonstration of the skills and knowledge I have learned so far in CS391.</p>
        </main>
    );
};


export default Main;