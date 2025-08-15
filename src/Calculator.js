
import { evaluate } from 'mathjs';
import React, { useState } from 'react'

export default function Calculator() {

    const [value,setValue] =useState("");

    function clickHandler(event){
        // button ki value nikal lo

        const buttonKiValue = event.target.innerText;

        // ab check karo kahin vo value C to nhi ager c hogi to input me jo hoga usko clear krna pade ga
         
        if(buttonKiValue === 'C')
        {
            // output field ko clear kro
            setValue("");
        }else if(buttonKiValue === "=")
        {
            // ager equal hai to calculation kro --->
          try{
                setValue(evaluate(value).toString());
          }catch{
            setValue("Error !!")
          }
           
        }else{
            //es case me tumne ya to numbers pe click kiya hoga nhi to optators pe

            setValue(value + buttonKiValue);
        }

    }


  return (
    <div className='main'>
        {/* heading */}
          <h2>Calculator</h2>
          {/* output ke liye */}
          <input type='text' className='result' value={value} readOnly/>

          <div className='buttons_containers'>
              
              <button onClick={clickHandler}>C</button>
              <button onClick={clickHandler} >/</button>
              <button onClick={clickHandler} >*</button>
              <button onClick={clickHandler} >-</button>
              <button onClick={clickHandler}>7</button>
              <button onClick={clickHandler}>8</button>
              <button onClick={clickHandler}>9</button>
              <button onClick={clickHandler} >+</button>
              <button onClick={clickHandler} >4</button>
              <button onClick={clickHandler}>5</button>
              <button onClick={clickHandler}>6</button>
              <button onClick={clickHandler}>=</button>
              <button onClick={clickHandler }>1</button>
              <button onClick={clickHandler}>2</button>
              <button onClick={clickHandler} >3</button>
              <button onClick={clickHandler}>0</button>
              <button onClick={clickHandler}>.</button>

          </div>

    </div>
  )
}
