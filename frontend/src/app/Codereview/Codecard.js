import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Clipboard from "clipboard";
import axios from "axios";
import Link from "next/link";

const Codecard = () => {
  const [codeData, setCodeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/codereivew/code-snippets/"
        );
        setCodeData(response.data);
      } catch (error) {
        console.error("Error fetching code snippets:", error);
      }
    };

    fetchData();

    Prism.highlightAll(); // Highlight code syntax

    const clipboard = new Clipboard(".btn-copy", {
      text: function (trigger) {
        const snippetId = trigger.getAttribute("data-snippet-id");
        const snippet = codeData.find((item) => item.id === Number(snippetId));
        return snippet ? snippet.code : "";
      },
    });

    clipboard.on("success", function (e) {
      e.clearSelection();
      const originalText = e.trigger.textContent;
      e.trigger.textContent = "Copied";
      setTimeout(() => {
        e.trigger.textContent = originalText;
      }, 2000); // Change back to original text after 2 seconds
    });

    clipboard.on("error", function (e) {
      console.error("Clipboard error:", e.action);
    });

    return () => clipboard.destroy();
  }, [codeData]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
      {codeData.map((snippet) => (
        <div key={snippet.id} className="max-w-screen-md mx-auto my-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="px-6 py-4">
              <span className="font-light text-gray-600">mar 10, 2019</span>
              <a
                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500 ml-2"
                href="#"
              >
                {snippet.language}
              </a>
            </div>
            <div className="bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
              <div className="py-3 px-4 flex">
                <div className="rounded-full w-3 h-3 bg-red-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2" />
                <div className="rounded-full w-3 h-3 bg-green-500" />
                <button
                  className="ml-auto flex items-center bg-gray-600 px-3 py-1 rounded-lg text-white hover:bg-gray-700 focus:outline-none btn-copy"
                  data-snippet-id={snippet.id}
                >
                  Copy
                </button>
              </div>
              <Link href={`/Codereview/${snippet.id}`}>
                <div className="py-4 text-sm px-4 mt-1 text-white text-xl">
                  <pre>
                    <code className={`language-${snippet.language}`}>
                      {snippet.code}
                    </code>
                  </pre>
                </div>
              </Link>
            </div>
            <Link href={`/Codereview/${snippet.id}`}>
              <div className="px-6 py-4">
                 <div className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                  {snippet.title}
               </div>
                <p className="mt-2 text-gray-600">{snippet.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a className="text-blue-600 hover:underline" href="#">
                    Read more
                  </a>
                  <div>
                    <img
                      className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                      src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80"
                      alt="avatar"
                    />
                    <h1 className="text-gray-700 font-bold">Khatab wedaa</h1>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Codecard;
