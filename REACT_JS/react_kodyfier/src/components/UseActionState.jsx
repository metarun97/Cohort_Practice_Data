import React, { useActionState, useId, useRef } from 'react';

const UseActionState = () => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleContactForm = (previousDate, formData) => {
    console.log(Object.fromEntries(formData.entries()));
  };

  const [state, formAction] = useActionState(handleContactForm, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        action={formAction}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Contact Us</h2>

        <div>
          <label htmlFor={nameId} className="block mb-1 font-medium">
            Name
          </label>
          <input
            ref={nameRef}
            id={nameId}
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor={emailId} className="block mb-1 font-medium">
            Email
          </label>
          <input
            ref={emailRef}
            id={emailId}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor={messageId} className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            ref={messageRef}
            id={messageId}
            rows="4"
            name="messgae"
            placeholder="Write your message..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default UseActionState;
