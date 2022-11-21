import React from 'react';
import './style.css';
import vector from "./img/vector.svg";

function Header({head_text}) {

    return (
        <header className='header'>
           <h1>{head_text}</h1>
           <button><img src={vector} alt="array" width={12.1} height={16.6}/>Export</button>
        </header>
    );
}

export default React.memo(Header);