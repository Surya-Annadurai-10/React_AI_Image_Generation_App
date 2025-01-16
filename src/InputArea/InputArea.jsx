import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './InputArea.module.css'
import { UserContext } from '../App';

const InputArea = () => {

  const {setCelebration,setShowText,setLoading,inputRef,imgUrl , setImgUrl,inputVal,setInputVal} = useContext(UserContext);
  // const key = "955937b9d0msh205316924e4b996p12159ejsn8c5d3aec9a79"
  const key = "4024c39bc6msh974bae254f92169p1fb9d6jsn7ac36f47b68f"
  // const key = "43b8e663b5msh58f9b2e18ba2c15p1537c5jsnf761c6446f17"
  const url = 'https://ai-image-generator14.p.rapidapi.com/';
  const options = {
      method: 'POST',
      headers: {
          'x-rapidapi-key': `${key}`,
          'x-rapidapi-host': 'ai-image-generator14.p.rapidapi.com',
          'Content-Type': 'application/json'
      },
      body:JSON.stringify( {
          jsonBody: {
              function_name: 'image_generator',
              type: 'image_generation',
              query: `${inputVal}`,
              output_type: 'png'
          }
      })
  };

  const handleInputVal = (e) =>{

    e.preventDefault();
    console.log(inputRef.current.value);
    setInputVal (inputRef.current.value);
  }
  
  let handle;
 useEffect(() =>{
   handle = async () =>{
    console.log("hi");
    console.log(inputVal);
    
 if(inputVal != "") {
    try {
      setShowText(false);
      setLoading(true);
      
        const response = await fetch(url, options);
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setImgUrl(result.message.output_png);
       console.log(result);
      setLoading(false);
      setCelebration(true);
      setTimeout(() =>{
        setCelebration(false);
      },2000)
      console.log("Loading Completed!...");

    } catch (error) {
        console.error(error);
    }}
   }
   handle();
 },[inputVal])



  return (
    <>
     
 
    <div className={styles.input_con}>
        <form >
            <input ref={inputRef} type="text" placeholder='Enter prompt here...' name="" id="" />
            <button onClick={ handleInputVal}>Generate</button>
        </form>
    </div>
    </>
  )
}

export default InputArea