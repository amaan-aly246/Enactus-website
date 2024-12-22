import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full flex flex-wrap gap-10 p-8 text-enacblk">
      <div className="w-full md:w-1/6 flex flex-col items-center md:items-start">
        <img src="images/symbol_enactus.png" alt="Logo" className="h-12" />
        <div className="flex gap-3 text-gray-200 mt-4">
          <a
            href="https://in.linkedin.com/company/enactus-nsut"
            target="_blank"
          >
            <LinkedInIcon className="text-[#0A66C2] scale-125" />
          </a>
          <a href="https://www.instagram.com/enac.nsut/" target="_blank">
            <InstagramIcon className="text-pink-500 scale-110" />
          </a>
          <a href="https://www.x.com/EnactusNSUT/" target="_blank">
            <XIcon className="text-black" />
          </a>
        </div>
      </div>
      <div className="flex justify-between lg:justify-normal w-full">
        <div className="w-1/2 md:w-1/6 font-montserrat lg:mr-16">
          <h1 className="font-bold mb-4">Connect with us</h1>
          <ul className="space-y-2">
            <li>
              Netaji Subhash University of Technology,
              <br />
              Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
            </li>
            <li>enactus@nsut.ac.in</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/6 font-montserrat">
          <h1 className="font-bold mb-4 text-right md:text-right lg:text-left">
            Quick Links
          </h1>
          <ul className="space-y-2 text-right md:text-right lg:text-left">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Achievements">Achievements</Link>
            </li>
            <li>
              <Link to="/Team">Team</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-[rgba(120,120,120,1)]">© 2024 Enactus NSUT</p>
    </footer>
  );
}
