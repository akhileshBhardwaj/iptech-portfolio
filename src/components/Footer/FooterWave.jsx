const FooterWave = () => {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-20 w-full"
      >
        <path
          d="M321.39,56.44C188.86,84.37,0,0,0,0V120H1200V0S1038.52,95.8,863.79,95.8,628.67,7.2,321.39,56.44Z"
          fill="#FFFDF8"
        />
      </svg>
    </div>
  );
};

export default FooterWave;
