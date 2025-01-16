import { createContext,useRef, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputArea from './InputArea/InputArea'
import OpenAI from "openai";
import Header from './Header/Header'
import ImageCon from './ImageCon/ImageCon'

export  const UserContext = createContext();
function App() {
    const inputRef = useRef("");
    const [inputVal , setInputVal] = useState("");
    const [imgUrl , setImgUrl] = useState("")
    const [loading , setLoading] = useState(false);
    const[showText ,setShowText] = useState(true);
    const [celebration ,  setCelebration] = useState(false);
  return (
    <>
    <UserContext.Provider value ={{celebration,setCelebration,showText,setShowText,loading,setLoading,inputRef,imgUrl,setImgUrl , inputVal , setInputVal}}>
        <Header />
        <ImageCon />
        <InputArea />
    </UserContext.Provider>
    </>
  )
}

export default App
