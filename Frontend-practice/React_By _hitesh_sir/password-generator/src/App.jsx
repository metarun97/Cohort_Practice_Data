import React, { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  //& useRef hook:-
  const passwordRef = useRef(null);

  //& useCallback Hook:-
  //* Note => useCallback me dependency k behalf pe run krke optimize krte h bs.
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*-+=[]{}~`';

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  //& copyToClipboard function:-
  const copyToClipboard = useCallback(() => {
    // Whole password select karega⬇️
    passwordRef.current?.select();
    // Whole password me se range according select karega⬇️
    // passwordRef.current?.setSelectionRange(0,20);
    // clipboard se data copy karega input k password ka⬇️
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //& useEffect Hook:-
  //* Note => useEffect me dependency k behalf pe rerender krte h bs.
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto bg-slate-700 shadow-md rounded-lg px-4 py-4 my-8 text-orange-500">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4 bg-white mt-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-3 py-1"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyToClipboard}
            className="text-white bg-blue-500 hover:bg-blue-600 transition outline-none px-3 py-0.5 shrink-0 cursor-pointer"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex gap-x-1 items-center">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              id="lengthInput"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="lengthInput">Length: {length}</label>
          </div>
          <div className="flex gap-x-1 items-center ">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              className="cursor-pointer"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex gap-x-1 items-center ">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              className="cursor-pointer"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
