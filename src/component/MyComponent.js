import React from 'react';
import useResize from './useResize';
 
const MyComponent = () => {
  const [size, setSize] = React.useState({ width: 0, height: 0 });
 
  useResize((newSize) => {
    setSize(newSize);
  });
 
  return (
    <>
    <div>
        <span>案例1: useResize 的hooks  监听窗口变化</span>
      <p>Width: {size.width}</p>
      <p>Height: {size.height}</p>
    </div>
    <div>
        
    </div>
    </>
  );
};
 
export default MyComponent;