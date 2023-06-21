interface CountButtonProps {
  countOperation: () => void;
  btnLabel?: JSX.Element;
}

function CountButton({ countOperation, btnLabel = <></> }: CountButtonProps) {
  return (
    <div
      className="flex items-center justify-center p-1 border border-gray-500 transition duration-0 hover:bg-orange-500 hover:duration-1000"
      onClick={countOperation}
    >
      {btnLabel}
    </div>
  );
}

export default CountButton;
