import React, { useState } from "react";

const list = () =>{
    const [inputValue, setInputValue] = useState("");
    const [items, setItems]  = useState([]);

    function addItem(){
        if(!newItem){
            alert("Item can't be empty");
            return
        }
        setItems((prevList) =>[...prevList,inputValue]);
        setInputValue("");
    }
    return(
        <div className="list">
            <h1>To-Do List</h1>
            <input type="text" placeholder="Add an item" value={inputValue} onChange={e=> setInputValue(e.target.value)}/>
            <button onClick={()=>addItem()}>Add</button>
            <ul>
                {items.map((item)=>{
                    return(
                        <div>
                           {item.value} 
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}