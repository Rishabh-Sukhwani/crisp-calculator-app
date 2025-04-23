
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8 text-purple-900">Crisp Calculator</h1>
      <Calculator />
      <p className="text-gray-500 text-sm mt-8">
        A modern calculator with a clean interface
      </p>
    </div>
  );
};

export default Index;
