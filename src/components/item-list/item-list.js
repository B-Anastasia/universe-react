import React from "react";
import './item-list.css';

const ItemList = () =>{
    return(
        <ul className="item-list list-group left-side-list" >
            <li className='list-group-item'>Name1</li>
            <li className='list-group-item'>Name2</li>
            <li className='list-group-item'>Name3</li>
        </ul>
    );
};

export default ItemList;