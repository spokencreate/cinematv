import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Testimonial from "./Testimonial";
import Footer from "../components/Footer";

const Hero = () => {
  const services = [
    {
      text: "Web Development",
      image: "/images/copy.png"
    },
    {
      text: "Research & Sketch",
      image: "/images/copy.png"
    },
    {
      text: "Help & Support",
      image: "/images/copy.png"
    },
    {
      text: "Open Source",
      image: "/images/copy.png"
    },
    {
      text: "Responsive Layout",
      image: "/images/copy.png"
    },
    {
      text: "Community Forum",
      image: "/images/copy.png"
    }
  ];
  const blog = [
    {
      image: "/images/book.jpg",
      span1: "TECH",
      span2: "TRAVEL",
      title: "Amazing Places To Visit",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus totam modi delectus quisquam quos facere repellat. Odioasperiores similique quia susci"
    },
    {
      image: "/images/bike.jpg",
      span1: "PHOTOGRAPHY",
      span2: "TECH",
      title: "How To Dress In Red Dress",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit.Temporibus totam modi delectus quisquam quos facere repellat. Odioasperiores similique quia susci"
    }
  ];
  return (
    <>
      <main
        className="w-[100%] mx-auto px-[7%] pt-[30px] min-h-[700px] bg-cover bg-center bg-no-repeat max-[750px]:min-h-[800px]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/book.jpg')"
        }}
      >
        <Nav />
        <div className="flex items-center justify-between pt-[150px] gap-y-[60px] max-[750px]:flex-col max-[750px]:justify-center">
          <div className="max-[750px]:flex max-[750px]:flex-col max-[750px]:items-center">
            <div className="flex items-center w-[100%]">
              <div className="w-[100px] bg-[#fe7f9c] h-[2px] mr-[30px] max-[900px]:w-[70px] max-[450px]:w-[40px]"></div>
              <h3 className="font-catamaran text-[#ffffff] text-[30px] max-[900px]:text-[25px] max-[450px]:text-[16px]">
                Let's Make Something Creative
              </h3>
            </div>
            <h2 className="font-catamaran text-[#ffffff] text-[100px] my-[10px] max-[900px]:text-[75px] max-[450px]:text-[60px]">
              Marketing&bull;
            </h2>
            <Link
              href="#"
              className="font-raleway w-[300px] text-center block bg-[#f25278] rounded-[30px] p-[20px] text-[#ffffff] text-[20px] hover:bg-[#ffffff] hover:text-[#f25278] transition duration-300 max-[900px]:w-[260px]"
            >
              Check Our Works&nbsp;&nbsp;&rarr;
            </Link>
          </div>
          <Image
            src="/images/play.png"
            width={100}
            height={100}
            alt="play button"
          />
        </div>
      </main>
      {/* End of main section */}
      <section className="w-[85%] mx-auto mt-[120px]">
        <div className="flex justify-between items-center flex-wrap gap-y-[60px] max-[800px]:justify-center">
          <div className="w-[48%] max-[800px]:w-[100%] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:text-center">
            <h2 className="font-catamaran text-[50px] text-[#ffffff] leading-[1.3]">
              Tested by 5k worldwide clients
              <span className="text-[#f25278]">&bull;</span>
            </h2>
            <p className="font-raleway text-[18px] text-[grey] my-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              illum magni voluptate expedita maiores, distinctio facilis
              exercitationem numquam eligendi, libero natus sint blanditiis,
              perspiciatis sapiente reiciendis necessitatibus quibusdam
              doloremque molestiae?
            </p>
            <Image
              src="/images/script.png"
              width={200}
              height={200}
              alt="script"
            />
          </div>
          <Image
            src="/images/book.jpg"
            width={300}
            height={300}
            alt="book"
            className="w-[300px] h-[300px] rounded-full object-cover"
          />
        </div>
        <div className="flex justify-between mt-[50px] flex-wrap gap-y-[40px]">
          <p className="font-catamaran text-[#ffffff] text-[20px] bg-[#252525] rounded-[30px] py-[15px] px-[30px]  w-[23%] text-center max-[600px]:w-[48%]">
            Logo1
          </p>
          <p className="font-catamaran text-[#ffffff] text-[20px] bg-[#252525] rounded-[30px] py-[15px] px-[30px]  w-[23%] text-center max-[600px]:w-[48%]">
            Logo2
          </p>
          <p className="font-catamaran text-[#ffffff] text-[20px] bg-[#252525] rounded-[30px] py-[15px] px-[30px]  w-[23%] text-center max-[600px]:w-[48%]">
            Logo3
          </p>
          <p className="font-catamaran text-[#ffffff] text-[20px] bg-[#252525] rounded-[30px] py-[15px] px-[30px]  w-[23%] text-center max-[600px]:w-[48%]">
            Logo4
          </p>
        </div>
      </section>
      <Testimonial />
      <section
        className="px-[7%] pt-[30px] min-h-[550px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/images/stairs.jpg')"
        }}
      >
        <h3
          className="font-catamaran text-[#ffffff] text-[50px] leading-[1] 
        max-[970px]:text-[35px]"
        >
          Let's discuss&bull;
        </h3>
        <h2 className="font-catamaran text-[#ffffff] text-[75px] leading-[1] my-[15px] max-[970px]:text-[60px]">
          Have a project in mind <span className="text-[#f25278]">?</span>
        </h2>
        <p className="font-raleway text-[#ffffff] text-[18px] my-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, atque hic cumque{" "}
        </p>
        <Link
          href="#"
          className="font-raleway w-[300px] text-center block bg-[#f25278] rounded-[30px] p-[20px] text-[#ffffff] text-[20px] hover:bg-[#ffffff] hover:text-[#f25278] transition duration-300 mt-[60px]"
        >
          Get A Quote
        </Link>
      </section>
      {/* End of quote section */}
      <section className="w-[85%] mx-auto my-[120px]">
        <div className="text-center w-[60%] mx-auto max-[750px]:w-[100%]">
          <h2 className="font-catamaran text-[50px] text-[#ffffff] leading-[1.3]">
            Our Pro Services<span className="text-[#f25278]">&bull;</span>
          </h2>
          <p className="font-raleway text-[grey] text-[16px] mt-[15px] mb-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iure praesentium doloremque
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-[100%] gap-y-[40px]">
    {services.map((item, index) => ( // 👈 Added 'index' here
        <p 
            key={index} // 👈 Added the unique 'key' prop here
            className="font-catamaran text-[#ffffff] text-[20px] bg-[#252525] rounded-[30px] py-[25px] px-[5px] w-[30%] text-center relative overflow-hidden max-[970px]:w-[48%] max-[600px]:w-[100%]"
        >
            {item.text}
            <Image
                src={item.image}
                width={40}
                height={40}
                alt="copy"
                className="absolute right-[-20px] top-[25%]"
            />
        </p>
    ))}
</div>
      </section>
      {/* End of services section */}
      <section className="w-[85%] mx-auto my-[120px]">
        <div className="text-center w-[60%] mx-auto max-[750px]:w-[100%]">
          <h2 className="font-catamaran text-[50px] text-[#ffffff] leading-[1.3]">
            Latest from blog<span className="text-[#f25278]">&bull;</span>
          </h2>
          <p className="font-raleway text-[grey] text-[16px] mt-[15px] mb-[50px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iure praesentium doloremque
          </p>
        </div>
        {blog.map((item, index) => ( // 👈 Added 'index' here
    <div 
        key={index} // 👈 Added the unique 'key' prop here
        className="flex justify-between items-center mb-[40px] flex-wrap gap-y-[40px]"
    >
        <Image
            src={item.image}
            width={300}
            height={320}
            alt="book"
            className="w-[35%] h-[300px] object-cover rounded-[10px] max-[600px]:w-[100%]"
        />
        <div className="w-[58%] max-[600px]:w-[100%]">
            <div>
                <span className="font-raleway inline-block p-[15px] mr-[10px] rounded-[20px] bg-[#353535] text-[#ffffff] text-[16px]">
                    {item.span1}
                </span>
                <span className="font-raleway inline-block p-[15px] rounded-[20px] bg-[#353535] text-[#ffffff] text-[16px]">
                    {item.span2}
                </span>
            </div>
            <h3 className="font-catamaran text-[#ffffff] text-[30px] leading-[1] my-[25px]">
                {item.title}
            </h3>
            <p className="font-raleway text-[#555555] text-[18px]">
                {item.description}
            </p>
        </div>
    </div>
))}
      </section>
      <Footer />
    </>
  );
};

export default Hero;
