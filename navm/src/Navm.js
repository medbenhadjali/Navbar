import React from 'react'
import './Navm.css';

export default function Navm(props) {
    return(  <div  >
        <ul className= "dropbtn ">
    {props.navmenu.map(el => (<li className="dropdown">
        {el.menu} 
        {(el.sub) &&  <ul className="dropdown-content" >{el.sub.map(x =>  <li><a>{x}</a></li>)}</ul>} 
    
    </li>)
    )}
        </ul>
    </div>
    )
}
