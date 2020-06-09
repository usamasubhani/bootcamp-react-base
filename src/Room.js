import React, {useState} from 'react';

function Room() {
    const [isLit, setLit] = useState(true);

    const brightness = isLit ? "lit" : "dark";

    return (
    <div className={`room ${brightness}`}>
        this room is { isLit ? 'Lit' : 'Dark' }
        <br />
        <button onClick={ () => setLit(!isLit) } >Flip</button>
    
    </div>
    )
}

export default Room