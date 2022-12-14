import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function StatusBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let computeProgress = () => {
      // The scrollTop gives length of window that has been scrolled
      const scrolled = document.documentElement.scrollTop;
      // scrollHeight gives total length of the window and
      // The clientHeight gives the length of viewport
      const scrollLength =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = `${(100 * scrolled) / scrollLength}`;

      setProgress(progress);
    };

    // Adding event listener on mounting
    window.addEventListener('scroll', computeProgress);

    // Removing event listener upon unmounting
    return () => window.removeEventListener('scroll', computeProgress);
  });

  return (
    <div>
      <style jsx>{`
            .bar{
              position: fixed;
              width: 66%;
            }
            `}</style>
      <div className="bar">
        <LinearProgress
          style={{ height: '9px' }}
          variant="determinate"
          value={progress}
          color="secondary"
        />
      </div>
    </div>
  );
}
