import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Counter Component
        </h1>

       
        <div className="text-5xl font-extrabold text-indigo-600 mb-6">
          {count}
        </div>

       
        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={decrement}
            disabled={count === 0}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              count === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
          >
            Decrement
          </button>

          <button
            onClick={increment}
            disabled={count === 10}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              count === 10
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            Increment
          </button>
        </div>

       
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Reset
        </button>

       
        {count === 10 && (
          <p className="mt-4 text-red-600 font-semibold">
            Maximum limit reached!
          </p>
        )}
        {count === 0 && (
          <p className="mt-4 text-blue-600 font-medium">Counter at minimum.</p>
        )}
      </div>
    </div>
  );
}

export default App;
