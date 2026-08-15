'use client';

import { useState } from 'react';
import { generateTextAction } from '@/app/actions/aiActions';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [prompt, setPrompt] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleSendResponse = async () => {
    const response = await generateTextAction(prompt);
    // console.log(response)
    setOutput(response);

  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-between font-sans dark:bg-black px-24 py-2 overflow-auto pb-25">
      {output && (
        <div>
          <h1 className="text-2xl text-white font-semibold">AI Response</h1>
          <ReactMarkdown>{output}</ReactMarkdown>
        </div>
      )}

      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          className="border p-2 rounded-md w-[80%] outline-none"
          placeholder="Type your message here..."
        ></input>
        <button
          onClick={handleSendResponse}
          className="p-2 bg-neutral-700 text-white cursor-pointer rounded-md w-[18%]"
        >
          Send
        </button>
      </div>
    </div>
  );
}
