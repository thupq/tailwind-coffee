import React from "react";

const Button = (props) => {
  return (
    <div>
      {/*<button className="px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full">*/}
        <button
            className="bg-transparent hover:bg-[#FFDCAB] text-amber-950 font-semibold hover:text-white py-2 px-4
            hover:border-amber-50
            border border-amber-700 hover:border-transparent rounded">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
