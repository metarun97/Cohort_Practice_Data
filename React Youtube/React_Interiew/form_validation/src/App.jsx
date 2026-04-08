import { useState } from 'react';

const App = () => {
  const [error, setError] = useState('');
  const [formdata, setFormdata] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.password.length < 8) {
      setError('Password must be more that 8 characters');
      return;
    }

    if (!formdata.password === formdata.confirmPassword) {
      setError('Password and confirm password should be');
      return;
    }

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(formdata.password)) {
      setError('Password mut be in special character and numbers too!');
      return;
    }

    setUser((prev) => [
      ...prev,
      {
        fullname: formdata.fullname,
        email: formdata.email,
        password: formdata.password,
        confirmPassword: formdata.confirmPassword,
      },
    ]);
    setError('');
    console.log(user);
    alert('Form submitted!');
  };

  return (
    <div className="w-full h-screen border bg-black flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="backdrop-blur-3xl w-sm p-5 rounded-lg flex flex-col gap-2 shadow-2xl"
        >
          <h1 className="text-blue-700 text-3xl text-center">
            Registration Form
          </h1>
          <div className="w-full">
            <label htmlFor="name">Name</label>
            <input
              className="bg-white w-full px-1 py-2 mt-2 border-0 outline-1 outline-slate-300 rounded focus:outline-blue-500"
              type="text"
              placeholder="Enter name..."
              name="fullname"
              required
              value={formdata.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email">Email</label>
            <input
              className="bg-white w-full px-1 py-2 mt-2 border-0 outline-1 outline-slate-300 rounded focus:outline-blue-500"
              type="email"
              placeholder="Enter email..."
              name="email"
              required
              value={formdata.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="password">Password</label>
            <input
              className="bg-white w-full px-1 py-2 mt-2 border-0 outline-1 outline-slate-300 rounded focus:outline-blue-500"
              type="password"
              placeholder="Enter name..."
              name="password"
              required
              value={formdata.password}
              onChange={handleChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="bg-white w-full px-1 py-2 mt-2 border-0 outline-1 outline-slate-300 rounded focus:outline-blue-500"
              type="password"
              placeholder="Enter name..."
              name="confirmPassword"
              required
              value={formdata.confirmPassword}
              onChange={handleChange}
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <button className="px-1 py-2 bg-blue-500 text-white rounded mt-2 cursor-pointer hover:bg-blue-600 transition-all duration-150 ease-in-out">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
