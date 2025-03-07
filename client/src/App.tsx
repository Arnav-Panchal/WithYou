import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-sm p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Hello, Tailwind CSS!</h2>
        <p className="mt-2 text-gray-600">
          This is a simple demo of using Tailwind CSS in a React TypeScript project.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
