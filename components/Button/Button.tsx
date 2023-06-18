// import React from "react";

interface ButtonProps {
  variant: "fill" | "outline";
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

// const Button = ({ variant, text, onClick }: ButtonProps) => {
//   const clickHandler = () => {
//     if (onClick) {
//       return onClick();
//     }
//   };

//   return (
//     <button
//       className={`border px-8 py-[8px] text-bottonFontSize font-gt-america ${
//         variant === "fill"
//           ? " bg-blue-700 rounded-lg border-blue-500 hover:bg-white hover:text-black"
//           : "bg-stone-900 rounded-lg"
//       }`}
//       onClick={clickHandler}
//     >
//       <span className="font-gt-america">{text}</span>
//     </button>
//   );
// };

// export default Button;
import React from "react";
import classNames from "classnames";

const Button = ({ variant, text, onClick }: ButtonProps) => {
  const clickHandler = () => {
    if (onClick) {
      return onClick();
    }
  };

  const buttonClasses = classNames(
    "border",
    "px-8",
    "py-[8px]",
    "text-bottonFontSize",
    "font-gt-america",
    {
      "bg-blue-700": variant === "fill",
      "rounded-lg": true,
      "border-blue-500": variant === "fill",
      "hover:bg-white": variant === "fill",
      "hover:text-black": variant === "fill",
      "bg-stone-900": variant === "outline",
    }
  );

  return (
    <button className={buttonClasses} onClick={clickHandler}>
      <span className="font-gt-america">{text}</span>
    </button>
  );
};
export default Button;
