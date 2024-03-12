import React, { useEffect } from 'react';

const DownloadComponent = () => {
  useEffect(() => {
    const initiateDownload = () => {
      setTimeout(() => {
        // Replace 'http://localhost:3000/download' with the actual download endpoint
        const downloadUrl = 'http://localhost:3000/download';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'large_file.zip'; // Change the filename if needed
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, 10000); // 10 seconds delay
    };

    initiateDownload();
  }, []);

  return (
    <div>
      <h1>Welcome to My Site!</h1>
      <p>Your download will start shortly...</p>
    </div>
  );
};

export default DownloadComponent;
