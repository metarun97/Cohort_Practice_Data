import React, { useEffect, useState } from 'react';

const Greeting = ({ randomMax }) => {
  // const [randomNumber, setRandomNumber] = useState(
  //   Math.floor(Math.random() * 5) + 1,
  // );
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * randomMax) + 1,
  );

  // const [greenting, setGreenting] = useState('');
  const [greenting, setGreenting] = useState();

  // useEffect(() => {
  //   console.log('Geeting is here!');
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('random', randomNumber);
  //   switch (randomNumber) {
  //     case 1:
  //       setGreenting('hello');
  //       break;

  //     case 2:
  //       setGreenting('hi');
  //       break;

  //     case 3:
  //       setGreenting('ke bhalo');
  //       break;

  //     case 4:
  //       setGreenting('ki hal ba');
  //       break;

  //     default:
  //       setGreenting('Default greenting');
  //   }
  // }, [randomNumber]);

  useEffect(() => {
    localStorage.setItem('random', randomNumber);
    if (randomNumber === randomMax) {
      localStorage.setItem('jackpot', true);
    } else {
      localStorage.setItem('jackpot', false);
    }

    switch (randomNumber) {
      case 1:
        setGreenting('hello');
        break;

      case 2:
        setGreenting('hi');
        break;

      case 3:
        setGreenting('ke bhalo');
        break;

      case 4:
        setGreenting('ki hal ba');
        break;

      default:
        setGreenting('Default greenting');
    }
  }, [randomNumber, randomMax]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold">Greetings</h1>
      {/* {randomNumber === 1 ? (
        <h2 className="mt-25 bg-yellow-500 p-2 rounded text-white text-4xl">
          Hi
        </h2>
      ) : randomNumber === 2 ? (
        <h2 className="mt-25 bg-yellow-500 p-2 rounded text-white text-4xl">
          Hello
        </h2>
      ) : randomNumber === 3 ? (
        <h2 className="mt-25 bg-yellow-500 p-2 rounded text-white text-4xl">
          Helew
        </h2>
      ) : randomNumber === 4 ? (
        <h2 className="mt-25 bg-yellow-500 p-2 rounded text-white text-4xl">
          Yo
        </h2>
      ) : randomNumber === 5 ? (
        <h2 className="mt-25 bg-yellow-500 p-2 rounded text-white text-4xl">
          Heyy You!
        </h2>
      ) : (
        <h2 className="mt-25 bg-yellow-500 p-2 rounded text-white text-4xl">
          Satulation
        </h2>
      )} */}
      <h2 className="mt-25 bg-yellow-500 p-2 rounded text-white text-4xl">
        {greenting}
      </h2>
    </div>
  );
};

export default Greeting;
