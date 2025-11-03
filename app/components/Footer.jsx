import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000]">
        <div className="w-[85%] mx-auto flex justify-between py-[120px] flex-wrap gap-y-[60px] max-[900px]:text-center max-[900px]:w-[60%] max-[450px]:w-[90%]">
          <div className="w-[30%] max-[900px]:w-[100%]">
            <h1 className="font-catamaran text-[#fff] text-[50px] leading-[1] mb-[10px]">
              <span className="font-catamaran text-[#f25278] text-[50px]">
                C
              </span>
              INEMA
            </h1>
            <div>
              <Link href="#" className="inline-block mr-[15px]">
                <Image
                  src="/images/facebook.png"
                  width={40}
                  height={40}
                  alt="facebook"
                  className="w-[40px] h-[40px] rounded-full p-[7px] bg-[#ffffff]"
                />
              </Link>
              <Link href="#" className="inline-block mr-[15px]">
                <Image
                  src="/images/tiktok.png"
                  width={40}
                  height={40}
                  alt="tiktok"
                  className="w-[40px] h-[40px] rounded-full p-[7px] bg-[#ffffff]"
                />
              </Link>
              <Link href="#" className="inline-block mr-[15px]">
                <Image
                  src="/images/instagram.png"
                  width={40}
                  height={40}
                  alt="instagram"
                  className="w-[40px] h-[40px] rounded-full p-[7px] bg-[#ffffff]"
                />
              </Link>
              <Link href="#" className="inline-block">
                <Image
                  src="/images/twitter.png"
                  width={40}
                  height={40}
                  alt="twitter"
                  className="w-[40px] h-[40px] rounded-full p-[7px] bg-[#ffffff]"
                />
              </Link>
            </div>
          </div>
          {/* End of socials */}
          <div className="w-[20%] max-[900px]:w-[100%]">
            <h3 className="font-catamaran text-[25px] text-[#ffffff] mb-[15px]">
              Quick Links
            </h3>
            <div>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                Services
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block"
              >
                Stories
              </Link>
            </div>
          </div>
          {/* End of quick links */}
          <div className="w-[20%] max-[900px]:w-[100%]">
            <h3 className="font-catamaran text-[25px] text-[#ffffff] mb-[15px]">
              Categories
            </h3>
            <div>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                Music
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                Photography
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                Tactics
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block mb-[10px]"
              >
                Tech
              </Link>
              <Link
                href="#"
                className="font-raleway text-[18px] text-[#555555] hover:text-[#ffffff] transition duration-300 block"
              >
                Tips
              </Link>
            </div>
          </div>
          {/* End of categories links */}
          <div className="w-[25%] max-[900px]:w-[100%]">
            <h3 className="font-catamaran text-[25px] text-[#ffffff] mb-[15px]">
              Our Gallery
            </h3>
            <div className="flex justify-between">
              <Image
                src="/images/music.jpg"
                width={90}
                height={80}
                alt="music"
                className="w-[30%] h-[80px] object-cover "
              />
              <Image
                src="/images/bicycle.jpg"
                width={90}
                height={80}
                alt="bicycle"
                className="w-[30%] h-[80px] object-cover "
              />
              <Image
                src="/images/book.jpg"
                width={90}
                height={80}
                alt="book"
                className="w-[30%] h-[80px] object-cover"
              />
            </div>
          </div>
        </div>
        <p className="font-raleway text-[#ffffff] text-[14px] text-center p-[20px] border-t border-[#ffffff]">
          Copyright&copy;2025 cinema. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
