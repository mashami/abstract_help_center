import React from "react";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  desc: string;
}

const Card = ({ image, title, desc }: CardProps) => {
  return (
    <div>
      <div className=" h-120 w-full h-full">
        <div className="  flex  gap-0 justify-start  h-full">
          <div className="mr-[20px] ml-0 ">
            <img className="h-[80px] w-[140px]" src={image} />
          </div>
          <div className="space-y-4">
            <h1 className="text-bottonFontSize font-bold font-gt-america">
              {title}
            </h1>
            <p className="text-bottonFontSize font-gt-america">{desc}</p>
            <div>
              <Link
                href={""}
                className="text-[24px] text-blue-500 font-gt-america"
              >
                {" "}
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
