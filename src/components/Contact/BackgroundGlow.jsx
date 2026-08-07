const BackgroundGlow = () => {
  return (
    <>
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-300/30 blur-[160px]" />

      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-yellow-400/20 blur-[180px]" />

      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-yellow-200/30 blur-[160px]" />
    </>
  );
};

export default BackgroundGlow;
