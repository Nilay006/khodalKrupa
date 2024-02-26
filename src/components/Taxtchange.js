import React, { useState, useEffect } from "react";

export default function TextChange() {
  const [data, setData] = useState("");
  const [char, setChar] = useState(0);
  const [word, setWord] = useState(0);

  useEffect(() => {
    let charCount = data.length;
    let wordCount = data.trim().split(/\s+/).filter(Boolean).length;
    setChar(charCount);
    setWord(wordCount);
  }, [data]);

  const handleUpcase = () => {
    let update = data.toUpperCase();
    setData(update);
  };

  const handleLwcase = () => {
    let update = data.toLowerCase();
    setData(update);
  };

  const handleCapcase = () => {
    let update = data.charAt(0).toUpperCase() + data.slice(1);
    setData(update);
  };

  const handleClear = () => {
    setData("");
    setChar(0); // Reset character count
  };

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  return (
    <main className="bg-[#789461] h-screen absolute w-full top-0 flex items-center">
      <div className="w-3/5 m-auto pt-5">
        <textarea
          value={data}
          onChange={handleOnChange}
          id="message"
          rows="12"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
          placeholder="Write your thoughts here..."
        ></textarea>

        <div className="flex justify-center flex-wrap mt-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={handleUpcase}
          >
            Convert to Uppercase
          </button>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            onClick={handleLwcase}
          >
            Convert to Lowercase
          </button>

          <button
            type="button"
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            onClick={handleCapcase}
          >
            Convert to Capital Case
          </button>

          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        <div className="text-white flex justify-center mt-4 space-x-1">
          <span>
            Character Count:{" "}
            <span className="text-[#FDE767] font-bold">{char}</span>
          </span>
          <span>
            {" "}
            | Word Count:{" "}
            <span className="text-[#FDE767] font-bold">{word}</span>{" "}
          </span>
        </div>
      </div>
    </main>
  );
}
