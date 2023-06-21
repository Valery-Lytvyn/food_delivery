import React from "react";

interface ToggleButtonProps {
  activeDelivery: "Delivery" | "Pickup";
  clickHandler: (e: React.SyntheticEvent) => void;
  btnLabels: string[];
}
function ToggleButton({
  activeDelivery,
  clickHandler,
  btnLabels,
}: ToggleButtonProps) {
  return (
    <div
      className="flex items-center bg-gray-200 
 rounded-full p-1 text-[14px]"
    >
      {btnLabels.map((item) => (
        <p
          className={`p-2 ${
            activeDelivery === item &&
            "bg-orange-500 text-white rounded-full p-2"
          }`}
          id={item}
          key={item}
          onClick={clickHandler}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default ToggleButton;
