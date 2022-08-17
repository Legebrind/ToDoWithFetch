import React, { useState } from "react";

const List = () =>{
    const [inputValue, setInputValue] = useState("");
    const [items, setItems]  = useState([]);

    function addItem(){
        if(!inputValue){
            alert("Item can't be empty");
            return
        }
        setItems((prevList) =>[...prevList,inputValue]);
        console.log(items);
        setInputValue("");
    }
    return(
        <div className="list">
            <h1>To-Do List</h1>
            <input type="text" placeholder="Add an item" value={inputValue} onChange={e=> setInputValue(e.target.value)}/>
            <button onClick={()=>addItem()}>Add</button>
            <ul>
                {items.length==0?
                    <li>List is empty, add a task</li> : 
                    items.map((item,i)=>{
                        return(
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;