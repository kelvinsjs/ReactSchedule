import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from "./Title";
import Lessons from "./Lessons";

ReactDOM.render(
    <React.StrictMode>
        <Title/>
        <Lessons/>
    </React.StrictMode>,
    document.getElementById('root')
);
