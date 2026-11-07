import React, { useEffect, useState } from 'react'


const Navbar = ({ color }) => {

 const [First, setFirst] = useState(0);


 //* Har render pe chalega hi chalega.
 useEffect(() => {
   alert("Run on every render.")
 });

 //* Pehle render pe hi chanlega bs.
 useEffect(() => {
  alert("I will run on first render.");
 }, [])


 //* Ye pehle mount pe to chalega hi or fir count state me change pe chale bs.
 useEffect(() => {
  alert("I am running because color was changed.");
 }, [color])

  //* Cleanup function in useEffect
  useEffect(() => {
    alert("He welcome to my page,This is the first render of app.jsx");

    return ()=>{
     alert("component is unmouted.")
    }
  }, []);

 return (
  <div>
   <p>I am navbar of {color} hehe...</p>
  </div>
 )
}

export default Navbar
