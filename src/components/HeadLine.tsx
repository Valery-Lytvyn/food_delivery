interface HeadLineProps {
  text: string;
}
function HeadLine({ text }: HeadLineProps) {
  return (
    <h1 className="text-orange-600 font-bold text-4xl text-center">{text}</h1>
  );
}

export default HeadLine;
