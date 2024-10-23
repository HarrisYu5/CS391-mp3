import React, { useState } from "react";
import { useEffect } from "react";

const Projects: React.FC = () => {

    useEffect(() => {
        document.title = "Calculator | Resume";
    }, []);

    const [a, setA] = useState<string>("");
    const [b, setB] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const checkInput = (a: string, b: string): boolean => {
        if (a === ""|| b === "") {
            setResult("Please input 2 numbers");
            return false;
        } else if (isNaN(Number(a)) || isNaN(Number(b))) {
            setResult("Please input numbers only");
            return false;
        } else if (!Number.isInteger(Number(a)) || !Number.isInteger(Number(b))) {
            setResult("Please input integers only");
            return false;
        }
        return true;
    };
    const displayResult = (result: number | string) => {
        setResult(result.toString());
    };
    const add = () => {
        if (!checkInput(a, b)) return;
        const result = Number(a) + Number(b);
        displayResult(result);
    };
    const subtract = () => {
        if (!checkInput(a, b)) return;
        const result = Number(a) - Number(b);
        displayResult(result);
    };
    const times = () => {
        if (!checkInput(a, b)) return;
        const result = Number(a) * Number(b);
        displayResult(result);
    };
    const divide = () => {
        if (!checkInput(a, b)) return;
        if (Number(b) === 0) {
            displayResult("You can't divide by 0");
            return;
        }
        const result = Number(a) / Number(b);
        displayResult(result);
    };
    const power = () => {
        if (!checkInput(a, b)) return;
        let base = Number(a);
        const exponent = Number(b);
        if (exponent === 0) {
            displayResult(1);
            return;
        }
        for (let i = 1; i < exponent; i++) {
            base *= base;
        }
        displayResult(base);
    };
    return (
        <div id="calculator">
            <label>Base number:</label>
            <input type="text" value={a} onChange={(e) => setA(e.target.value)} placeholder="Input your base number"/>
            <br/>
            <label>Target number:</label>
            <input type="text" value={b} onChange={(e) => setB(e.target.value)} placeholder="Input your target number"/>
            <br/>
            <div id="buttons">
                <button onClick={add}>+</button>
                <button onClick={subtract}>-</button>
                <button onClick={times}>*</button>
                <button onClick={divide}>/</button>
                <button onClick={power}>**</button>
            </div>
            <p id="display">{result}</p>
        </div>
    );
};
export default Projects;