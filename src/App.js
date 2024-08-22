// import logo from './logo.svg';
import './App.css';

import MyComponent from './component/MyComponent';
import SecondComponent from './component/SecondComponent';
// import Dva from './Dva.js'
function App() {
  // const [count, setCount] = useState(0)

  // const interval=useRef(null)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log('test', count)
  //     if (count >= 100) {
  //       clearInterval(interval)
  //     } else {

  //       setCount((count) =>
  //         count >= 100 ? 100 : count + 1
  //       );
  //     }
  //   }, 10);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [count]);
  //   const inputref=useRef()

  // const fatherclick=()=>{
  //     // 父组件 useref   forwadref   子组件 （props，ref)  
  //      inputref.current.focus()
  // }


  return (
    <div className="App">
        <MyComponent />
        <SecondComponent />

        {/* <Logtimes  ref={inputref} />
        <button onClick={fatherclick}>父组件点击测试</button> */}
      {/* <ProgressBar valuePercentage={count} />
      <ProgressBar valuePercentage={80} />
      <Componenta />
      <TextInputWithFocusButton /> */}

      {/* <span>hello word{count}</span> */}
      {/* <test value={count} /> */}

      {/* <Timecomponent /> */}
      {/* <button onClick={handclick}>{testcount}</button > */}
      {/* <Dva /> */}
    </div>
  );
}

export default App;
