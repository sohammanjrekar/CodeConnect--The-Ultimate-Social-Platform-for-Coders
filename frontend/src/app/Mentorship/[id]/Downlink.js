// components/DownloadLink.js

import React from 'react';

const DownloadLink = ({ href, children }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = href;
    link.download = 'filename.pdf'; // Change 'filename.pdf' to the desired filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      {children}
    </button>
  );
};

export default DownloadLink;
