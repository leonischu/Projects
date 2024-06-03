import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const[inputdata,setInputData]=useState("");
  const[items,setItems]=useState([]);
  // add items function
  const addItem =()=>{
    if(!inputdata){
      alert('pls fill the data');
    }else{
      
    }

  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todo" />
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️Add Items"
              className="form-control"
              value={inputdata}
              onChange={(event)=>setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          {/* show our items */}
          <div className="showItems">
            <div className="eachItem">
              <h3>apple</h3>
              <div className="todo-btn"></div>
              <i className="fa fa-edit add-btn " ></i>
              <i className="fa fa-trash add-btn" ></i>


            </div>
          </div>



          {/* remove all the buttons */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove all">
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
