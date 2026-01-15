import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [password,setPassword]=useState("");
  const [length,setLength]=useState(8);
  const [num,setNum]=useState(false);
  const [chars,setChars]=useState(false)
  const [numberCount, setNumberCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
;
  const passref=useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (chars) str += "!@#$%^&*"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, num, chars])

  useEffect(() => {
    passwordGenerator()
  }, [length, num, chars, passwordGenerator])


  const copyPasswordToClipboard=useCallback(()=>{
    passref.current?.select();
    passref.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,num,chars,passwordGenerator])

  return(
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-400 bg-gray-900">
      <h1 className="text-cyan-400 text-center pb-3 text-4xl">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-3 bg-gray-800 text-white" placeholder="Password" readOnly  ref={passref}/>
          <button className="outline-none bg-cyan-500 hover:bg-cyan-600 text-white px-3  shrink-0 text-lg" onClick={copyPasswordToClipboard}>copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
              <input type="range" min={6} max={100} value={length} className="cursor-pointer accent-cyan-500" onChange={(e)=>setLength(Number(e.target.value))}  />
              <label>Length: {length}</label>
            </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={num} id="nmberInput" onChange={(prev)=>{setNum((prev)=>!prev)}}/>
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={chars} id="characterInput" onChange={(prev)=>{setChars((prev)=>!prev)}}/>
            <label>Characters</label>
          </div>
        </div>
    </div>
  )
}

export default App
