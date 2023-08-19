// VideoBackground.tsx
import React from 'react';
import styles from './VideoBackground.module.css';

const VideoBackground: React.FC = () => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/animated_medium20211213-6708-1pe49xm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;