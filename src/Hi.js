import React from 'react';
import './Hi.css'
function Hi(props) {
return <div className="App">Hello <strong>{ props.name }</strong> {2 + 20} is learning React</div>
}



export default Hi