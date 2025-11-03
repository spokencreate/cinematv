"use client";
import React, { useState } from "react";
import Image from "next/image";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: "/images/bike.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiillum magni voluptate expedita maiores, distinctio facilisexercitationem numquam eligen",
      name: "Adams Smith",
      position: "CEO davi"
    },
    {
      image: "/images/bus.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiillum magni voluptate expedita maiores, distinctio facilisexercitationem numquam eligen",
      name: "Adams Smith",
      position: "CEO assistant"
    },
    {
      image: "/images/vintage.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisiillum magni voluptate expedita maiores, distinctio facilisexercitationem numquam eligen",
      name: "Adams Smith",
      position: "CEO boss"
    }
  ];

  const nextButton = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevButton = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <>
      <section className="w-[85%] mx-auto my-[120px]">
        <div className="text-center w-[60%] mx-auto max-[750px]:w-[100%]">
          <h2 className="font-catamaran text-[50px] text-[#ffffff] leading-[1.3]">
            People Trust Us<span className="text-[#f25278]">&bull;</span>
          </h2>
          <p className="font-raleway text-[grey] text-[16px] mt-[15px] mb-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iure praesentium doloremque
          </p>
        </div>
        <div className="bg-[#252525] w-[100%] p-[40px] relative ">
          {
            <div className="flex justify-between items-center flex-wrap gap-y-[80px]">
              <Image
                src={testimonials[currentIndex].image}
                width={400}
                height={300}
                alt="client"
                className="w-[40%] h-[300px] object-cover rounded-[10px] max-[700px]:w-[100%]"
              />
              <div className="w-[58%] font-raleway max-[700px]:w-[100%]">
                <h2 className="font-catamaran text-[#353535] text-[200px] leading-[1.5px] mt-[60px]">
                  &apos;&apos;
                </h2>
                <p className="text-[#ffffff] text-[18px]">
                  {testimonials[currentIndex].description}
                </p>
                <h3 className="text-[#ffffff] text-[20px] mt-[40px]">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-[#555555] text-[18px]">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          }

          <button
            onClick={prevButton}
            className="text-[#ffffff] hover:text-[#555555] transition duration-300 cursor-pointer absolute left-[-30px] top-[50%] "
          >
            &larr;
          </button>
          <button
            onClick={nextButton}
            className="text-[#ffffff] hover:text-[#555555] transition duration-300 cursor-pointer absolute right-[-30px] top-[50%] "
          >
            &rarr;
          </button>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
