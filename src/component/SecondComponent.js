import useCounter from './useCounter';
 
function SecondApp() {
  const { count, increment, decrement, reset } = useCounter(0);
 
  return (
    <div  style={{borderTop:'1px solid red'}}>

        <p>案例2:</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
 
export default SecondApp;