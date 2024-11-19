'use client';

import { useState } from 'react';

const LazyYouTubeEmbed = ({ videoId } : { videoId : string }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  // Đường dẫn thumbnail của video (YouTube cung cấp ảnh thumbnail với URL này)
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Khi người dùng click vào ảnh, iframe sẽ được hiển thị
  const handleLoadIframe = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      {isIframeLoaded ? (
        // Hiển thị iframe khi đã click
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '20px'
          }}
        ></iframe>
      ) : (
        // Hiển thị ảnh thumbnail trước khi click
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '20px'
          }}
          onClick={handleLoadIframe}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '50%',
              padding: '10px',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyYouTubeEmbed;
