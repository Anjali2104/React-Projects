import { useState } from "react"

function App() {
   const [color,setColor] = useState('olive');
   function handleColor(prop){
        setColor(prop);
   }
  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={() => handleColor("red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}} onClick={() => handleColor("green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}} onClick={() => handleColor("blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={() => handleColor("orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}} onClick={() => handleColor("black")}>Black</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}} onClick={() => handleColor("yellow")}>Yellow</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}} onClick={() => handleColor("purple")}>Purple</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}} onClick={() => handleColor("gray")}>Gray</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}} onClick={() => handleColor("pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"maroon"}} onClick={() => handleColor("maroon")}>Maroon</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"white"}} onClick={() => handleColor("white")}>White</button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lavender"}} onClick={() => handleColor("lavender")}>Lavender</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
