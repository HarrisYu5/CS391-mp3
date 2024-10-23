import React from 'react';
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer>
            All rights reserved &copy; Harris Yu 2024
            <br />
            <Link to="/credit">Credit</Link>
        </footer>
    );
};

export default Footer;
