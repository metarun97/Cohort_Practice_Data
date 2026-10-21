import { useCallback, useEffect, useState, useRef } from 'react'

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')

  /* useRef hook:- */
  const passwordRef = useRef();

  /* Password generator useCallback */
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-{}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },
    [length, numberAllowed, charAllowed, setPassword]);

  /* Copy password to clipboard */
  const copyPasswordToClipboard = useCallback(() => {

    /* Select all of the password in input */
    passwordRef.current?.select();

    /* Select all of the password in input */
    passwordRef.current?.setSelectionRange(0, 20);


    window.navigator.clipboard.writeText(password);

  }, [password])


  /* useEffect hook */
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  /**
   * In useCallback hook => Yaha dependencies jo di hai unme se koise method me change (chedhh-chaad) ho to uske us method ko optimize krdo.
   * In useEffect hook => Yaha dependencies di hai unme se koise method me change (chedhh-chaad) ho usko dubara se run krodo.
   */


  return (
    <div className="max-w-md w-full mx-auto shadow-md rounded-lg px-4 py-1.5 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
        <input type="text"
          value={password}
          className='w-full outline-none py-1 px-3'
          placeholder='password...'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none py-0.5 px-3 shrink-0 bg-blue-500 text-white rounded-md'>copy</button>
      </div>
      <div className='flex text-sm gap-x-3.5'>
        <div className='flex text-center gap-x-1'>
          <input type="range"
            className='cursor-pointer'
            value={length}
            min={6}
            max={100}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex text-center gap-x-1'>
          <input type="checkbox"
            className='cursor-pointer'
            defaultChecked={numberAllowed}
            onChange={() => { setNumberAllowed(prev => !prev) }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex text-center gap-x-1'>
          <input type="checkbox"
            className='cursor-pointer'
            defaultChecked={charAllowed}
            onChange={() => { setCharAllowed(prev => !prev) }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
