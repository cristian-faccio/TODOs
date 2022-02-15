import React from 'react';
import './TodoIcon.css';
import { FaRegWindowClose } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const iconTypes = {
    "check": color => (
        <FaCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <FaRegWindowClose className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({ type, color = 'gray', onClick }){
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };