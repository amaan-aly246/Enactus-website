import React from "react";
function Card({member , index}) {
    return (
        <div
          key={index}
          className=" h-auto w-2/3 md:w-2/5 lg:w-1/4 relative flex justify-center flex-col text-left rounded-2xl hover:shadow-[0px_24px_48px_rgba(0,0,0,0.3)] overflow-hidden transform transition  mx-auto   hover:scale-105"
        >
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-[60vh] lg:h-[56vh] object-cover object-${member.position} hover:shadow-[0px_8px_16px_rgba(0,0,0,0.3)] shadow-lg rounded-md`}
          />
          <div className="absolute inset-0 py-6 text-left font-moderniz flex flex-col justify-end items-start bg-opacity-50 text-white h-auto">
            <div className=" bg-white border rounded-r-lg p-3 h-auto bg-opacity-75 transition hover:bg-opacity-100">
              <h3 className="text-lg font-semibold text-enacblk">{member.name}</h3>
            </div>
          </div>
        </div>
      );
}

export default Card;
