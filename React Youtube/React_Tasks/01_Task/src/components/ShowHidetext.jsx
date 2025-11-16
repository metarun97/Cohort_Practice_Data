import { useState } from 'react';

const ShowHidetext = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? 'hide text' : 'show text'}
      </button>
      {show && <p>show shown by the button toggle</p>}
    </>
  );
};

export default ShowHidetext;
