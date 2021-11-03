import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function MyInfo() {
    return (
        <div>
            <h1 className="myName">Chaitanya Kanakia</h1>
            <p>I am an international student, studying masters of information technology at monash university. I am keen on becoming a web developer and learning new skills. This is my attempt at learning react from scratch.</p>
            <ul>
                <li>Bora Bora</li>
                <li>Switzerland</li>
                <li>Iceland</li>
            </ul>
        </div>
    )
}

ReactDOM.render(
    <MyInfo />,
    document.getElementById("root")
)
