import React from "react";
import fishImage from "../assets/fish.jpg";
import hikeImage from "../assets/hike.jpg";
import mushroomImage from "../assets/mushroom.jpg";
const About: React.FC = () => {
    return (
        <main>
            <h2>Who am I?</h2>
            <p>I was born in Mainland China, and grew up in Hongkong. Ever since I was little, the outdoor has always been a part of me. I loved fishing, hiking, and foraging.</p>

            <h2>What do I do?</h2>
            <h3>Fishing</h3>
            <img src={fishImage} alt="Tog fish off of Rhode Island" id="tog" />
            <br />
            <p>Fishing is one of my favorite pastimes. I explore the aquatic environments all around New England, from mountain streams to the deep ocean, I have caught many different species of fish.</p>

            <h3>Hiking</h3>
            <img src={hikeImage} alt="Hongkong Skyline" id="skyline" />
            <p>I love the feeling of exploration, and the view when you climb a mountain always brings excitement and joy to me. I have hiked many trails all around the world. From Hongkong to Japan, to the US and Canada.</p>

            <h3>Foraging</h3>
            <img src={mushroomImage} alt="Oyster mushroom found in NH" id="mush" />
            <p>My family came from Yunnan, China, where mushroom picking is a local custom. I grew up in the mountains picking mushrooms with my family. I have learned to identify the mushrooms of the Northeast and go on foraging trips regularly.</p>
        </main>
    );
};
export default About;