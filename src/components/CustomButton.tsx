import React from "react";

interface CustomButtonProps {
  btnLabel: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function CustomButton({ btnLabel, onClick }: CustomButtonProps) {
  return (
    <button
      className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:duration-1000"
      aria-label={btnLabel}
      value={btnLabel}
      onClick={onClick}
    >
      <span>{btnLabel}</span>
    </button>
  );
}

export default CustomButton;
