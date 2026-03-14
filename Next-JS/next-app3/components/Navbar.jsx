import Link from "next/link";

const Navbar = () => {
  return <div className="w-full h-20 text-white bg-blue-500 flex justify-between items-center px-6">
    <h1 className="text-4xl">Sheriyans</h1>
    <div className="flex gap-6 text-xl">
    <Link href="/home">Home</Link>
    <Link href="/courses">Courses</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
    </div>
  </div>;
};

export default Navbar;
