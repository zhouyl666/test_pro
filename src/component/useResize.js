import React from 'react';
 
function useResize(callback) {
  const handleResize = React.useCallback(() => {
    callback({ width: window.innerWidth, height: window.innerHeight });
  }, [callback]);
 
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
}
 
export default useResize;