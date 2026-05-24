import React, { useRef } from 'react';
import { memo } from 'react';

const ReactMemoChild = memo(() => {
  const currRef = useRef(0);

  return (
    <div>
      <p>
        It runs time should be:
        <span>{currRef.current++}</span>
      </p>
    </div>
  );
});

export default ReactMemoChild;
