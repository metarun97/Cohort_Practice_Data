import Button from './Button';
import Navbar2 from './Navbar2';

const Navbar = () => {

  return (
    <>
      <div
        className="bg-slate-500 text-white flex items-center justify-between px-4 py-2"
      >
        <h1>Sheriyans</h1>
        <Navbar2 />
      </div>
      <Button />
    </>
  );
};

export default Navbar;
