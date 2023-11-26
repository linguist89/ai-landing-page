"use client";

import Image from "next/image";


const Hero = () => {

  const handleButtonClick = () => {
    const element = document.getElementById("custom-features");
    element.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          AI Could take your job in months, not years
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          AI's potential to impact jobs in months instead of years can be viewed as an opportunity for personal growth and adaptation, leading to a hopeful future with more career options not less.
        </p>
        <button
          className="btn btn-primary btn-wide"
          onClick={handleButtonClick}  // Add the onClick event handler
        >
          Free skills Assessment
        </button>

      </div>
      <div className="lg:w-full">
        <Image
          src="https://source.unsplash.com/man-sitting-on-couch-with-looking-at-his-macbook-on-table-pzA7QWNCIYg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
