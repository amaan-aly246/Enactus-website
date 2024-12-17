import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Home() {
  return (
   <>
    <div className="relative w-full h-[55vh] flex items-center">
      <img
        src="images/team_home.png"
        alt="cover"
        className="w-full h-full object-cover absolute"
      />
      <div className="absolute top-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>


      <div className=" h-1/2 w-full relative z-10 flex flex-col items-start justify-between text-white font-bold text-6xl gap-8 pl-10 font-moderniz">
        <div >
          <span className="text-yellow-500">En</span>trepreneurial
        </div>
        <div >
          <span className="text-yellow-500">Act</span>ion
        </div>
        <div >
          <span className="text-yellow-500">US</span>
        </div>
      </div>


    </div>
    <div className="w-full h-[35vh] flex items-center justify-center flex-col px-8 gap-4">
      <h1 className="font-moderniz text-4xl">WHAT IS ENACTUS</h1>
      <p className="text-lg text-[#1F1F1F] font-montserrat">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis distinctio explicabo sint facere similique cupiditate nisi laudantium expedita praesentium natus, earum repudiandae repellat. Assumenda vero, iste obcaecati ipsa eligendi sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quis minus omnis vitae exercitationem ad velit nulla deleniti quisquam sit, dicta aliquam animi officiis et quasi, quos, ut ratione natus.</p>
    </div>
    <div className="h-[38vh] w-full flex justify-cente font-bold text-md font-lemon">
      <div className="w-1/3 bg-[#FFC000] text-enacblk flex justify-center items-center">UPLIFT</div>
      <div className="w-1/3 bg-enacblk text-[#FFC000] flex justify-center items-center">ENACT</div>
      <div className="w-1/3 bg-[#FFC000] text-black flex justify-center items-center">ADVANCE</div>
    </div>
    <div className="w-full h-[55vh] flex items-center justify-center p-12">
      <div className="w-2/3 h-full flex items-center justify-center flex-col gap-6">
        <h1 className="font-moderniz text-4xl">ABOUT US</h1>
        <p className="font-montserrat text-lg text-enacblk px-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, excepturi officiis? Minus sequi dolor doloribus quis cupiditate dolorem nisi veniam culpa iste, aspernatur, vero reprehenderit! Quam doloribus facere amet mollitia.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero iure, temporibus vel possimus aspernatur cupiditate corrupti ea natus corporis blanditiis iste quia eum aliquam voluptatum officia, sapiente vitae omnis?</p>
      </div>
      <div className="w-1/3 h-full rounded-lg overflow-hidden">
        <img
          src="images/Enactus_about.jpg"
          alt=""
          className="w-full h-auto object-cover object-bottom"
        />
    </div>



    </div>
    <div className="w-full h-[55vh] flex items-center justify-center flex-col p-12">
      <div className="font-moderniz text-3xl">OUR PARTNERS</div>
      <div className="w-full h-1/2 flex items-center justify-center gap-4">
        <img src='images/partners/partner-1.jpeg' alt="" />
        <img src='images/partners/partner-2.png' alt=""/>
        <img src='images/partners/partner-3.jpeg' alt="" />
      </div>
    </div>
    <footer className="h-[40vh] w-full flex items-center  text-enacblk p-8 gap-10">
      <div className=" h-3/4 w-1/6">
        <img src="images/symbol_enactus.png" alt=""  className="h-12"/>
        <div className='flex justify-left items-center space-x-3 text-gray-200 mt-4 w-full h-auto'>
          <FacebookIcon className="text-blue-600 scale-125"/>
          <InstagramIcon className="text-pink-500 scale-110"/>
          <XIcon className="text-black"/>
          <YouTubeIcon className="text-red-600 scale-125"/>
        </div>
      </div>
      <div className=" h-3/4 w-1/6 font-montserrat">
        <h1 className="font-bold mb-7">Explore</h1>
        <ul>
          <li>Design</li>
          <li>Prototyping</li>
          <li>Development features</li>
          <li>Design systems</li>
          <li>Collaboration features</li>
          <li>Design process</li>
          <li>FigJam</li>
        </ul>
      </div>
      <div className=" h-3/4 w-1/6 font-montserrat">
        <h1 className="font-bold mb-7">Resources</h1>
        <ul>
          <li>Blog</li>
          <li>Best practices</li>
          <li>Colors</li>
          <li>Color wheel</li>
          <li>Support</li>
          <li>Developers</li>
          <li>Resource library</li>
        </ul>
      </div>
    </footer>
   </>
  );
}