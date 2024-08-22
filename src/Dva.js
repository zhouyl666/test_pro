import { useState, useEffect } from "react"
const Dva = () => {
    const [arr, setArr] = useState([0])
    // 两个回调函数，第一个回调函数完成后，会将返回结果作为参数，传入第二个参数
    const handleClick = () => {
        Promise.resolve().then(() => {
            setArr([...arr, 1]);
        })
            .then(() => {
                // setArr([...arr, 2]);
                setArr(pre => [...pre, 2])
            })
    }
    useEffect(() => {
        console.log(arr)
    }, [arr]);
    return (
        <>
            <div>
                <button onClick={handleClick}>change</button>
            </div>
        </>
    )
}


export default Dva


