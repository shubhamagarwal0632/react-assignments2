import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
   const handleincrement = ()=>{
    setCount(count+1)
   }
   const handledecrement = ()=>{
    setCount(count-1)
   }
   const handleincrementby5 = ()=>{
    setCount(count+5)
   }
   const handledecrementby5 = ()=>{
    setCount(count-5)
   }

   const handlechange=(e)=>{
    setValue(e.target.value)
    // console.log(e.target.value)
   
   }

   const handlesubmit = (e)=>{
    e.preventDefault();
    setCount(prevCount => prevCount + parseInt(value));
    setValue('')
 
   }
   
  return (
    <>
    <div className='flex justify-center items-center flex-col  bg-green-800 h-screen gap-5'>
      
    <form action="" onSubmit={handlesubmit}>
      <input className='border border-zinc-900 px-[10vw] py-[0.5vw] rounded-lg 'value={value} type="text" onChange={handlechange} />
    </form>
    <h1 className='text-white text-2xl'>{count}</h1>   
    <div className='flex justify-center items-center gap-2'>
      
    

    <button onClick={handleincrement} className='bg-blue-500 border border-zinc-700 text-white px-5 py-1.5 rounded-lg text-[1.5vw]'>increment</button>
    <button onClick={handledecrement} className='bg-gray-500 border border-zinc-700 text-white px-5 py-1.5 rounded-lg text-[1.5vw]'>decrement</button>
    <button onClick={handleincrementby5} className='bg-yellow-500 border border-zinc-700 text-white px-5 py-1.5 rounded-lg text-[1.5vw]'>increment +5</button>
    <button onClick={handledecrementby5} className='bg-blue-900 border border-zinc-700 text-white px-5 py-1.5 rounded-lg text-[1.5vw]'>decrement -5</button>

    </div>
    
    </div>
    
    </>
  )
}

export default App
