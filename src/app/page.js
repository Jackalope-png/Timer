'use client'
import { useState, useEffect } from "react"

export default function Home() {
const [data, setData] = useState(0)
const [isRunning, setIsRunning] = useState(true)
const [count, setcount] = useState(100)
useEffect(() =>{
if (!isRunning) return
const timer = setInterval(() => {
  setData(prevData => prevData + 1);
}, 1000);
return () => clearInterval(timer);
},[isRunning])

useEffect(() =>{
  if (!isRunning) return
  const timer = setInterval(() => {
    setcount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
  }, 1000);
  return () => clearInterval(timer);
  },[isRunning])

const formatTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const remainingSeconds = sec % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const theEnd = () =>{
  setIsRunning(false);
}
const reset = ( ) =>{
  setData(0)
}
const minutes = 0
return(
  <div>
  <div>Seconds:{data}</div>
  <div>Timer: {formatTime(data)}</div>
  <div>countdown {count} </div>
  <div>countdown {formatTime(count)} </div>
  <div onClick={theEnd}>Stop</div>
  <div onClick={reset}>reset</div>
  </div>
 )
}