import React from "react";
import { useEffect } from "react";
const web1 = "https://dev.to/jps27cse/understanding-layout-components-and-react-router-outlet-in-react-3l2e";
const web2 = "https://reactrouter.com/en/main/start/overview";

const Credit: React.FC = () => {

    useEffect(() => {
        document.title = "Credit | Resume";
    }, []);

    return (
        <main>
            <h2>Credit:</h2>
            <p>{web1}</p>
            <br />
            <p>{web2}</p>
        </main>
    );
};

export default Credit;
