
const Navbar = () => {
 return (
  <nav className="flex justify-between items-center bg-slate-600 text-white px-10 py-4">
   <div className="logo">
    <span className="font-bold text-xl">iTasks</span>
   </div>
   <ul className="flex gap-10">
    <li className="cursor-pointer hover:font-bold transition-all">Home</li>
    <li className="cursor-pointer hover:font-bold transition-all">Your tasks</li>
   </ul>
  </nav>
 )
}

export default Navbar;
