import { useRef } from 'react';
import Card from './Card';

const Forground = () => {
  let data = [
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      fileSize: '.4mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Download now', tagColor: 'green' },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      fileSize: '.4mb',
      close: true,
      tag: { isOpen: true, tagTitle: 'Upload now', tagColor: 'blue' },
    },
    {
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      fileSize: '.4mb',
      close: true,
      tag: { isOpen: false, tagTitle: 'Download now', tagColor: 'green' },
    },
  ];

  const ref = useRef();

  return (
    <div
      ref={ref}
      className="w-full h-full fixed top-0 left-0 z-20 flex gap-6 p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Forground;
