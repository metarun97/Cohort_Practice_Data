const Background = () => {
  return (
    <div className="fixed w-full h-screen z-10">
      <div className="w-full py-10 absolute top-[5%] flex justify-center font-semibold text-xl text-zinc-600">
        Documnets.
      </div>
      <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none font-semibold tracking-tight text-zinc-900">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
