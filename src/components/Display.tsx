
interface DisplayProps {
  value: string;
}

const Display = ({ value }: DisplayProps) => {
  const formattedValue = value.length > 10 
    ? parseFloat(value).toExponential(4) 
    : value;

  return (
    <div className="bg-purple-900 p-4 rounded-xl shadow-inner mb-4 text-right transition-all duration-300">
      <div className="font-mono text-gray-300 text-sm opacity-70 h-5">
        {/* This could be used for showing operations history */}
      </div>
      <div className="font-mono text-white text-4xl font-medium tracking-wider overflow-hidden whitespace-nowrap transition-all duration-300">
        {formattedValue}
      </div>
    </div>
  );
};

export default Display;
