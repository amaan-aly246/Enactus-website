import partner_1 from "/images/partners/partner-1.jpeg";
import partner_2 from "/images/partners/partner-2.png";
import partner_3 from "/images/partners/partner-3.jpeg";

import team_home from "/images/team_home.png";
import enactus_about from "/images/Enactus_about.jpg";

export default function Home() {
  return (
    <>
    {/* @TODO: Hero section bg image */}
      <div className="relative w-full h-[40vh] md:h-[48vh] lg:h-[55vh] flex items-center">
        <img
          src={team_home}
          alt="cover"
          className="w-full h-full object-cover absolute"
        />
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>

        <div className="h-1/4 md:h-1/3 lg:h-1/2 w-full relative flex flex-col items-start justify-around text-white font-bold text-2xl md:text-4xl lg:text-6xl gap-2 px-2 font-moderniz">
          <div>
            <span className="text-yellow-500">En</span>trepreneurial
          </div>
          <div>
            <span className="text-yellow-500">Act</span>ion
          </div>
          <div>
            <span className="text-yellow-500">US</span>
          </div>
        </div>
      </div>

      <div className="h-auto md:h-[30vh] lg:h-[38vh] w-full flex flex-col items-center justify-center px-4 md:px-8 py-8 gap-4 mt-8 text-center">
        <h1 className="font-moderniz text-2xl md:text-4xl">WHAT IS ENACTUS</h1>
        <p className="text-sm md:text-lg text-[#1F1F1F] font-montserrat">
          Enactus is a network of leaders committed to using business as a
          catalyst for positive social and environmental impact. We educate,
          inspire, and support young people to use innovation and
          entrepreneurship to solve the world&apos;s biggest problems.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row h-max my-8">
        <div className="flex-1 bg-[#FFC000] text-enacblk flex justify-center items-center flex-col gap-y-2 md:gap-y-4 text-center px-4 py-14">
          <h3 className="font-moderniz text-base md:text-xl">UPLIFT</h3>
          <span className="font-montserrat text-sm md:text-lg">
            Elevating lives and fostering hope—at Enactus, we empower
            communities to overcome challenges through innovative, sustainable
            solutions, paving the way for shared progress and brighter futures.
          </span>
        </div>
        <div className="flex-1 bg-enacblk text-[#FFC000] flex justify-center items-center flex-col gap-y-2 md:gap-y-4 text-center px-4 py-14">
          <h3 className="font-moderniz">ENACT</h3>
          <span className="font-montserrat text-sm md:text-lg">
            Turning ideas into impact—Enactus transforms challenges into
            opportunities with purpose-driven actions, blending entrepreneurship
            and social commitment to drive meaningful change.
          </span>
        </div>
        <div className="flex-1 bg-[#FFC000] text-black flex justify-center items-center flex-col gap-y-2 md:gap-y-4 text-center px-4 py-14">
          <h3 className="font-moderniz">ADVANCE</h3>
          <span className="font-montserrat text-sm md:text-lg">
            Building tomorrow today—Enactus advances communities through
            innovation, mentorship, and leadership, equipping changemakers to
            shape a resilient, sustainable future.
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 p-6">
        <div className="w-full md:w-2/3 flex flex-col gap-6 text-center">
          <h1 className="font-moderniz text-2xl md:text-4xl w-full text-center">
            ABOUT US
          </h1>
          <p className="font-montserrat text-sm md:text-lg text-enacblk text-justify">
            Enactus NSUT is a student-led organization dedicated to using
            entrepreneurial action and technology to uplift underserved
            communities and drive sustainable development. We develop impactful
            projects that tackle social challenges and create opportunities for
            growth, empowering marginalized groups. Through innovative tech
            solutions in education, healthcare, and financial inclusion, we aim
            to foster meaningful change and build a more inclusive, resilient
            society. Our initiatives improve lives and equip communities with
            the skills and resources needed to thrive in a rapidly changing
            world.
          </p>
        </div>
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
          <img
            src={enactus_about}
            alt=""
            className="w-full h-auto object-cover object-bottom"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="font-moderniz text-2xl md:text-3xl">OUR PARTNERS</h1>
        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <img src={partner_1} alt="Partner 1" className="w-1/4 h-auto " />
          <img src={partner_2} alt="Partner 2" className="w-1/4 h-auto " />
          <img src={partner_3} alt="Partner 3" className="w-1/4 h-auto" />
        </div>
      </div>
    </>
  );
}
