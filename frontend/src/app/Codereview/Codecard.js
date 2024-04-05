import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import Clipboard from 'clipboard';
import axios from 'axios'; // Import axios for API requests
import Link from 'next/link'; // Import Link from Next.js

const Codecard = () => {
  const [codeData, setCodeData] = useState([]); // State to hold code snippet data

  useEffect(() => {
    // Fetch code snippet data
    axios.get('http://127.0.0.1:8000/codereivew/code-snippets/')
      .then(response => {
        setCodeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching code snippets:', error);
      });

    Prism.highlightAll(); // Highlight code syntax

    const clipboard = new Clipboard('.btn-copy', {
      text: function(trigger) {
        // Find the corresponding code snippet
        const snippetId = trigger.getAttribute('data-snippet-id');
        const snippet = codeData.find(item => item.id === Number(snippetId));
        return snippet.code; // Return code of the snippet
      }
    });

    clipboard.on('success', function(e) {
      e.clearSelection();
    });

    return () => clipboard.destroy();
  }, []);

  return (
    <div>
      {codeData.map(snippet => (
        <div key={snippet.id} className="max-w-2xl px-10 my-4 py-6 bg-white rounded-lg shadow-md mx-2">
          <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">mar 10, 2019</span>
            <a
              className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
              href="#"
            >
              Design
            </a>
          </div>
          <div className="mx-auto bg-gray-800 shadow-2xl rounded-lg overflow-hidden my-4">
            <div id="header-buttons" className="py-3 px-4 flex">
              <div className="rounded-full w-3 h-3 bg-red-500 mr-2" />
              <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2" />
              <div className="rounded-full w-3 h-3 bg-green-500" />
              {/* Copy Button */}
              <button
                className="ml-auto flex items-center bg-gray-600 px-3 py-1 rounded-lg text-white hover:bg-gray-700 focus:outline-none btn-copy"
                data-snippet-id={snippet.id}
              >
                Copy
              </button>
            </div>
            <div id="code-area" className="py-4 text-sm px-4 mt-1 text-white text-xl">
              <pre>
                <code className={`language-${snippet.language}`}>
                  {snippet.code}
                </code>
              </pre>
            </div>
          </div>
          <div className="mt-2">
            <Link href={`/Codereview/${snippet.id}`} className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                {snippet.title}
            </Link>
            <p className="mt-2 text-gray-600">
              {snippet.description}
            </p>
          </div>
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
      ))}
    </div>
  );
};

export default Codecard;
